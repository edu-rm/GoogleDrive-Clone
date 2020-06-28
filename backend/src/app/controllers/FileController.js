import File from '../models/File';

class FileController {
  async store(req, res){

    // const file = await File.create({ path, user_id, folder_id });
    console.log(req.file);
    return res.json({ msg: 'Success' });
  }

}

export default FileController;