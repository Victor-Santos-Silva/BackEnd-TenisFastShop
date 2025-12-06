const db = require("../config/database");

module.exports = {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  },

  async create(user) {
    const sql = "INSERT INTO users (nome) VALUES (?)";
    const [result] = await db.query(sql, [user.nome]);
    return { id: result.insertId, ...user };
  }
};
