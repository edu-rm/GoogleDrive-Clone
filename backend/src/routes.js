import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig)

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import FolderController from './app/controllers/FolderController';

const folderController = new FolderController();
const fileController = new FileController();
const userController = new UserController();

routes.post('/users', userController.store);

//Privates

routes.post('/files', upload.array('files'), fileController.store);


routes.post('/folders', folderController.store);
routes.get('/folders/:id', folderController.index);




export default routes;