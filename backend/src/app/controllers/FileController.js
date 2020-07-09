import File from '../models/File';
import fs from 'fs';
import { promisify } from 'util';

class FileController {
  async store(req, res){

    // console.log(req.files);
    // const file = await File.create({ path, user_id, folder_id });
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