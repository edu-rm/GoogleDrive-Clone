import fs from 'fs';

import Folder from '../models/Folder';
import File from '../models/File';


class FolderController {
  async store(req, res) {
    // Path da pasta pai
    const { name, father, user_id }  = req.body;

    const { path } = await Folder.findByPk(father);
    const newFolderPath = `${path}/${name}/`;


    const folder = await Folder.create({
      user_id,
      name, 
      father, //id ou null
      path: newFolderPath,
    });

    fs.mkdirSync(
      newFolderPath,
      (err)=>{
        if (err) return res.json({ error: 'Falha na criação de diretório'});
      });


    return res.json(folder);
  }

  async index(req,res){
    // Preciso exibir tanto as pastas da pasta que foi passada quanto os arquivos
    const { id } = req.params;

    const folders = await Folder.findAll({
      where: {
        father: id,
      },
    });

    return res.json(folders);

    

  }
}

export default FolderController;