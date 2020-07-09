import jwt from 'jsonwebtoken';
import { fn, col } from 'sequelize';

import config from '../../config/authToken';
import User from '../models/User';

import Folder from '../models/Folder';
import File from '../models/File';


class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      }
    });

    if(!user) {
      return res.json({ error: 'User does not exists '});
    }

    if(!(await user.checkPassword(password))){
      return res.json({ error: 'Password does not match'});
    }

    const { id, name } = user;

    const { id: rootFolder } = await Folder.findOne({
      where: {
        user_id: id,
        father: null
      }
    });

    /**
     * Total storage
     */

    const file = await File.findAll({
      where : {
        user_id: user.id
      },
      attributes : [
        [fn('sum', col('size')), 'total_size']
      ],
    });

    const total_size = file[0].dataValues.total_size * 0.000001;

    return res.json({
      user :{
        id,
        name,
        email,
      },
      folder : rootFolder,
      storage: total_size,
      token: jwt.sign({ id }, config.secret, {
        expiresIn: config.expiresIn,
      }),
    });
  }
}

export default SessionController;