import fs from 'fs';

import Folder from '../models/Folder';

class FolderController {
  async store(req, res) {
    // Path da pasta pai
    const { name, father, user_id, path }  = req.body;

    const newFolderPath = `${path}/${name}/`

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

}

export default FolderController;