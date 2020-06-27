import User from '../models/User';
import File from '../models/File';

import fs from 'fs';
import { resolve } from 'path';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const path = resolve(__dirname, '..', '..', '..', 'storage', 'users', email);

    const user = await User.create({
      name,
      email,
      password,
      root: path
    });


    fs.mkdirSync(
      path,
      (err)=>{
        if (err) return res.json({ error: 'Falha na criação de diretório'});
      });

    return res.json(user);
  }

}

export default UserController;