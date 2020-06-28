import multer from 'multer';
import { extname, resolve } from 'path';

import File from '../app/models/File';
import Folder from '../app/models/Folder';


export default {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const { user_id, folder_id } = req.query;

      const { path } = await Folder.findByPk(folder_id);

      const url = ``;
      
      const newFile = await File.create({ 
        name: file.originalname,
        path, 
        user_id,
        folder_id,
        url: 'teste',
        extension: extname(file.originalname),
      });


      return cb(null, resolve(path));
    },
    filename: (req, file, cb) => {
      req.name = file.originalname;
      
      return cb(null, file.originalname + extname(file.originalname));
    }
  }),
}