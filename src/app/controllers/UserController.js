import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create({
      name: 'Jonathan Juliani',
      email: 'Jonathan Juliani',
      password_hash: 'Jonathan Juliani',
    });

    return res.json(user);
  }
}

export default new UserController();
