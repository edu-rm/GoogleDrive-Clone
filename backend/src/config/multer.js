import multer from 'multer';
import { extname, resolve  } from 'path';
import fs from 'fs';

import Folder from '../app/models/Folder';


export default {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const { folder_id } = req.query;
      const { path } = await Folder.findByPk(folder_id);

      return cb(null, resolve(path));
    },
    filename: (req, file, cb) => {
      req.name = file.originalname;
      
      return cb(null, file.originalname);
    }
  }),
}