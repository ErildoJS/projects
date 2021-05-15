import User from '../models/User';

class UserController {
  async store(req, res) {
    // verificacao antes para saber se o email ja nao existe no db
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'user already exixts' });
    }

    // retornando apenas oa info que o user necessita
    const { id, name, email } = await User.create(req.body);
    return res.json({ id, name, email });
  }
}

export default new UserController();
