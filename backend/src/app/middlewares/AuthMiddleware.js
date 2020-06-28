import jwt from 'jsonwebtoken';
import config from '../../config/authToken';

export default async (req, res, next)=>{
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');



}