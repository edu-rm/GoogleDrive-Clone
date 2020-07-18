import Router from 'express';
import multer from 'multer';



import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig)

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import FolderController from './app/controllers/FolderController';
import SessionController from './app/controllers/SessionController';
import StorageController from './app/controllers/StorageController';


import AuthMiddleware from './app/middlewares/AuthMiddleware';
import StorageMiddleware from './app/middlewares/StorageMiddleware';


const folderController = new FolderController();
const fileController = new FileController();
const userController = new UserController();
const sessionController = new SessionController();
const storageController = new StorageController();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);


//Privates

routes.post('/files', AuthMiddleware, StorageMiddleware, upload.array('files'), fileController.store);
routes.get('/storage', AuthMiddleware, storageController.index);



routes.post('/folders',AuthMiddleware, folderController.store);
routes.delete('/folders',AuthMiddleware, folderController.delete);

routes.get('/files', AuthMiddleware, fileController.index);
routes.delete('/files',AuthMiddleware, fileController.delete);

routes.get('/folders',AuthMiddleware, folderController.show);







export default routes;