const db = require('../config/db');

class UserRepository {
  static async create(name, email, password) {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email;`;
    
    const values = [name, email, password];
    
    try {
      const result = await db.one(query, values);
      return result;
    } catch (error) {
      throw new Error('Erro ao criar usuário: ' + error.message);
    }
  }

  static async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1`;
    try {
      const result = await db.oneOrNone(query, [email]);
      return result;
    } catch (error) {
      throw new Error('Erro ao buscar usuário: ' + error.message);
    }
  }

  static async findById(id) {
    const query = `SELECT * FROM users WHERE id = $1`;
    try {
      const result = await db.oneOrNone(query, [id]);
      return result;
    } catch (error) {
      throw new Error('Erro ao buscar usuário: ' + error.message);
    }
  }
}

module.exports = UserRepository;
