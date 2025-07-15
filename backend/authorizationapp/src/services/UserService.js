const UserRepository = require('../repository/UserRepository');
const bcrypt = require('bcrypt');

class UserService {
  static async registerUser(name, email, password, confirmPassword) {
    if (!name || !email || !password || password !== confirmPassword) {
      throw new Error("Dados inválidos ou incompletos");
    }

    // Verifica se o usuário já existe
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("Usuário já existe");
    }

    // Cria um hash para a senha
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Cria o novo usuário no banco
    const user = await UserRepository.create(name, email, hashedPassword);

    return user;
  }

  static async loginUser(email, password) {
    if (!email || !password) {
      throw new Error("Email e senha são obrigatórios");
    }

    // Verifica se o usuário existe
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Senha inválida");
    }

    return user;
  }

  static async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}

module.exports = UserService;
