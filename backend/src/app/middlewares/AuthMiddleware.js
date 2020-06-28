import jwt from 'jsonwebtoken';
import config from '../../config/authToken';
import { promisify } from 'util';

export default async (req, res, next)=>{
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try{
    const decoded = await promisify(jwt.verify)(token, config.secret);

    req.user_id = decoded.id;
    next();
  }catch(e) {
    return res.status(401).json({ error: 'Token Invalid'})
  }

}