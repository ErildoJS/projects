import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    // validaçõs do yup
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'validation fails' });
    }

    const { email, password } = req.body;

    // 1 - ver se exist um user com esse email
    const user = await User.findOne({ where: { email } });

    // 2 - verificar se o user nao existe e retornar um erro
    if (!user) {
      return res.status(401).json({ error: 'user not found' });
    }

    // 3 - verificar se a senha nao bate com a que esta no db, se nao bater retorna ero
    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'password does not match' });
    }

    // pego o id e o name que eu quero retornar apartir do momento que ele fez login
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
