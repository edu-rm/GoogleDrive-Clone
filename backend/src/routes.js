import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig)

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import FolderController from './app/controllers/FolderController';
import SessionController from './app/controllers/SessionController';


const folderController = new FolderController();
const fileController = new FileController();
const userController = new UserController();
const sessionController = new SessionController();


routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);


//Privates

routes.post('/files', upload.array('files'), fileController.store);


routes.post('/folders', folderController.store);

routes.get('/files', fileController.index);
routes.get('/folders/:id', folderController.index);





export default routes;