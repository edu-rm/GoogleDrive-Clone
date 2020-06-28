import User from '../models/User';
import Folder from '../models/Folder';


import fs from 'fs';
import { resolve } from 'path';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const path = resolve(__dirname, '..', '..', '..', 'storage', 'users', email);
    const rootFolder = path;

    const user = await User.create({
      name,
      email,
      password,
    });

    const url = `http://localhost:3333/storage/${email}/`;

    const folder = await Folder.create({
      name: 'root',
      user_id: user.id,
      father: null,
      path: rootFolder,
      url
    });


    fs.mkdirSync(
      path,
      (err)=>{
        if (err) return res.json({ error: 'Falha na criação de diretório'});
      });

    return res.json({ user, folder});
  }

}

export default UserController;