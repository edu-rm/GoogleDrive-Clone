import multer from 'multer';
import { extname, resolve } from 'path';

import File from '../app/models/File';
import Folder from '../app/models/Folder';


export default {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const { folder_id } = req.query;

      const { path, url } = await Folder.findByPk(folder_id);

      const fileUrl = `${url}${file.originalname}`;
      
      const newFile = await File.create({ 
        name: file.originalname,
        path: `${path}${file.originalname}`, 
        user_id: req.user_id,
        folder_id,
        url: fileUrl,
        extension: extname(file.originalname),
      });


      return cb(null, resolve(path));
    },
    filename: (req, file, cb) => {
      req.name = file.originalname;
      
      return cb(null, file.originalname);
    }
  }),
}