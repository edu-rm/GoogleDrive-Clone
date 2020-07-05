import jwt from 'jsonwebtoken';
import config from '../../config/authToken';
import User from '../models/User';
import Folder from '../models/Folder';

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

    return res.json({
      user :{
        id,
        name,
        email,
      },
      folder : rootFolder,
      token: jwt.sign({ id }, config.secret, {
        expiresIn: config.expiresIn,
      }),
    });
  }
}

export default SessionController;