import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'storage', 'users'),
    filename: (req, file, cb) => {
      return cb(null, file.originalname + extname(file.originalname));
    }
  }),
}