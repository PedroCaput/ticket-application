const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {
  static async register(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    try {
      const user = await UserService.registerUser(name, email, password, confirmpassword);
      res.status(201).json({ msg: "Usuário criado com sucesso!", user });
    } catch (error) {
      res.status(422).json({ msg: error.message });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await UserService.loginUser(email, password);
      const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1h' });
      res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      res.status(422).json({ msg: error.message });
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;

    try {
      const user = await UserService.getUserById(id);
      res.status(200).json({ user });
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
}

module.exports = UserController;
