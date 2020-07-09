import multer from 'multer';
import { extname, resolve  } from 'path';
import fs from 'fs';

import Folder from '../app/models/Folder';


export default {
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const { folder_id } = req.query;
      
      const { path } = await Folder.findByPk(folder_id);

      console.log(path)

      // const fileUrl = `${url}${file.originalname}`;
      // const filePathConverted = PathConvert.sToBs(`${path}${file.originalname}`);


      // req.fileList = {
      //   ...req.files,
      //   [file.originalname] : {
      //     filePathConverted,
      //     fileUrl
      //   }
      // }

      
      /**
       * Size in Bytes
       */

      // const {size} = fs.statSync(filePathConverted);
      // console.log(size);

      // const newFile = await File.create({ 
      //   name: file.originalname,
      //   path: `${path}${file.originalname}`, 
      //   user_id: req.user_id,
      //   folder_id,
      //   url: fileUrl,
      //   extension: extname(file.originalname),
      //   size,
      // });

      // console.log(file.originalname)

      return cb(null, resolve(path));
    },
    filename: (req, file, cb) => {
      req.name = file.originalname;
      
      return cb(null, file.originalname);
    }
  }),
}