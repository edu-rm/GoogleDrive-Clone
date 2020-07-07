import Router from 'express';
import multer from 'multer';
import authMiddleware from './app/middlewares/AuthMiddleware';

import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig)

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import FolderController from './app/controllers/FolderController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/AuthMiddleware';


const folderController = new FolderController();
const fileController = new FileController();
const userController = new UserController();
const sessionController = new SessionController();


routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);


//Privates

routes.post('/files', AuthMiddleware, upload.array('files'), fileController.store);


routes.post('/folders',AuthMiddleware, folderController.store);
routes.delete('/folders',AuthMiddleware, folderController.delete);

routes.get('/files', AuthMiddleware, fileController.index);
routes.delete('/files',AuthMiddleware, fileController.delete);

routes.get('/folders',AuthMiddleware, folderController.show);







export default routes;