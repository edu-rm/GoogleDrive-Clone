import Router from 'express';

const routes = Router();

import FileController from './app/controllers/FileController';

const fileController = new FileController();

routes.post('/files', fileController.store);

export default routes;