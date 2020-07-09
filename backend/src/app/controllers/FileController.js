import fs from 'fs';
import { fn, col } from 'sequelize';
import { extname } from 'path';

import File from '../models/File';
import Folder from '../models/Folder';

import PathConvert from '../../utils/PathConvert';

import { promisify } from 'util';

class FileController {
  async store(req, res){

    /**
     * Verificação de armazenamento
     */

    const file = await File.findAll({
      where : {
        user_id: req.user_id
      },
      attributes : [
        [fn('sum', col('size')), 'total_size']
      ],
    });

    const total_size = file[0].dataValues.total_size * 0.000001;

    let total_size_new_files = req.files.reduce((size, file) => {
      return size + file.size;
    }, 0) ;

    total_size_new_files *= 0.000001;
    
    if(total_size+total_size_new_files >= 3){
      return res.status(401).json({ error: 'Espaço disponivel excedido' });
    }

    /**
     * Inserindo
     */

    const { folder_id } = req.query;
    const { path, url } = await Folder.findByPk(folder_id);


    for(const file of req.files){
      const fileUrl = `${url}${file.originalname}`;
      const filePathConverted = PathConvert.sToBs(`${path}${file.originalname}`);

      const {size} = fs.statSync(filePathConverted);

      const newFile = await File.create({ 
          name: file.originalname,
          path: `${path}${file.originalname}`, 
          user_id: req.user_id,
          folder_id,
          url: fileUrl,
          extension: extname(file.originalname),
          size,
        });
    }

    return res.json({ msg: 'Success' });
  }

  async index(req,res){
    // Listar todos os arquivos presentes na pasta X
    const { folder_id } = req.query;


    const files = await File.findAll({
      where: {
        folder_id
      },
    });
    return res.json(files)
  }

  async delete(req, res) {
    const { id } = req.params;
    const { path } = await File.findByPk(id);
    try {

      await File.destroy({
        where: {
          id,
        }
      });    

      await promisify(fs.unlink)(path);
      
    } catch (e) {
      return res.json(e);
    }

    return res.json({ msg : 'Deletado com sucesso '});
  }

}

export default FileController;