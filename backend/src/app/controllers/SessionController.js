import jwt from 'jsonwebtoken';
import config from '../../config/authToken';
import User from '../models/User';

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


    return res.json({
      user :{
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, config.secret, {
        expiresIn: config.expiresIn,
      }),
    });
  }
}

export default SessionController;