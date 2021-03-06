import User from '../models/User';

class UserControler {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'user already exists' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserControler();
