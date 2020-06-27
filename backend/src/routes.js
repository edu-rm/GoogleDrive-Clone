import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig)

import FileController from './app/controllers/FileController';
const fileController = new FileController();


routes.post('/files', upload.array('files'), fileController.store);

export default routes;