import File from '../models/File';

class FileController {
  async store(req, res){
    const { path, user_id } = req.query;
    const file = await File.create({ path, user_id });

    return res.json(file);
  }

}

export default FileController;