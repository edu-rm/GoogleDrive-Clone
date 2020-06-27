import multer from 'multer';
import { extname, resolve } from 'path';

import File from '../app/models/File';

export default {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      let path = req.query.path;
      await File.create({ path: `${path}${file.originalname}`, user_id: req.query.user_id });
      return cb(null, resolve(__dirname, '..','..','storage', 'users' + path));
    },
    filename: (req, file, cb) => {
      req.name = file.originalname;
      
      return cb(null, file.originalname + extname(file.originalname));
    }
  }),
}