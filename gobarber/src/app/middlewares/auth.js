import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // funcao que pega uma funcao de callback e transforma numa funcao que possa usar async await
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // se o token nao existir vou dar erro
    return res.status(401).json({ eror: 'Token not provider' });
  }

  const [, token] = authHeader.split(' '); // dividindo o bearer do token

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id; // incluir o nosso  do decoded  dentro do req.id do user
    return next();
  } catch (err) {
    return res.json({ error: 'Token invalid' });
  }
};
