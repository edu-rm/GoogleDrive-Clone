import fs from 'fs';
import { Op } from 'sequelize';

import Folder from '../models/Folder';
import File from '../models/File';


class FolderController {
  async store(req, res) {
    // Path da pasta pai
    const { name, father }  = req.body;

    const { path, url } = await Folder.findByPk(father);
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
    const { id } = req.params;

    const folders = await Folder.findAll({
      where: {
        father: id,
      },
    });

    return res.json(folders);

    

  }

  async delete(req,res) {
    const { id } = req.params;

    // Encontra o caminho da pasta que foi solicitada para exclusão
    const { path } = await Folder.findOne({
      where: {
        id,
      }
    });

    // Faz uma busca para pegar todas as pastas que possuem o mesmo caminho no path (a mesma e subpastas)
    const query = `${path}%`;

    const subfolders = await Folder.findAll({
      where: {
        path: {
          [Op.like]: query
        },
      }
    });

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


    return res.json(ids);
  }
}

export default FolderController;