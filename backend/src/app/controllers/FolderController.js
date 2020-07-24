import fs from 'fs';
import { Op } from 'sequelize';
import { fn, col } from 'sequelize';

import PathConvert from '../../utils/PathConvert';

import Folder from '../models/Folder';
import File from '../models/File';

class FolderController {
  async store(req, res) {
    // Path da pasta pai
    const { name, father } = req.body;

    const { path, url } = await Folder.findByPk(father);


    // console.log(newFolderPathh);

    /**
     * LINUX
     */

    // const newFolderPath = `${path}${name}/`;
    // const newFolderUrl = `${url}${name}/`;

    /**
     * WINDOWS
     */

    const newFolderPath = `${path}${name}/`;
    const newFolderUrl = `${url}${name}/`;

    const folder = await Folder.create({
      user_id: req.user_id,
      name, 
      father, //id ou null
      path: newFolderPath,
      url: newFolderUrl,
    });

    fs.mkdirSync(
      newFolderPath,
      (err)=>{
        if (err) return res.json({ error: 'Falha na criação de diretório'});
      });


    return res.json(folder);
  }

  async show(req,res){
    // Preciso exibir tanto as pastas da pasta que foi passada quanto os arquivos
    const { id } = req.query;
    console.log(id);

    const childrenFolders = await Folder.findAll({
      where: {
        father: id,
      },
    });

    const pastaAtual = await Folder.findByPk(id);


    return res.json({
      childrenFolders,
      father: pastaAtual.father ? pastaAtual.father : null,
    });
  }

  async delete(req,res) {
    const { id } = req.query;

    // Encontra o caminho da pasta que foi solicitada para exclusão
    const { path } = await Folder.findOne({
      where: {
        id,
      }
    });

    // Faz uma busca para pegar todas as pastas que possuem o mesmo caminho no path (a mesma e subpastas)
    let query = `${path}%`;

    const subfolders = await Folder.findAll({
      where: {
        path: {
          [Op.like]: String(query)
        },
      }
    });

    /**
     * Windows
     */
    const pathDelete = PathConvert.sToBs(path);

    // Excluir todos os arquivos usando o array de id

    const ids = subfolders.map(folder => folder.id);

    await File.destroy({
      where: {
        folder_id: ids
      }
    });

    await Folder.destroy({
      where: {
        id: ids,
      }
    });

    fs.rmdirSync(path, {
      recursive: true,
    });
    
    const file = await File.findOne({
      where : {
        user_id: req.user_id
      },
      attributes : [
        [fn('sum', col('size')), 'total_size']
      ],
    });

    const total_size = file.dataValues.total_size * 0.000001; 

    return res.json({
      storage: total_size,
    });
  }
}

export default FolderController;