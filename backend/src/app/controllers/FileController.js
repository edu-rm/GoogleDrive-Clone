import File from '../models/File';

class FileController {
  async store(req, res){

    return res.json({ msg: "hello"});
  }
}

export default FileController;