const UserRepository = require("../repositories/UserRepository");

module.exports = {
  async getAllUsers() {
    return await UserRepository.findAll();
  },

  async createUser(data) {
    if (!data.nome) throw new Error("Nome é obrigatório");
    return await UserRepository.create(data);
  }
};
