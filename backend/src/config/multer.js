import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      let path = req.query.path;
      console.log(path);
      return cb(null, resolve(__dirname, '..','..','storage', 'users' + path));
    },
    filename: (req, file, cb) => {
      console.log(file.originalname);
      return cb(null, file.originalname + extname(file.originalname));
    }
  }),
}