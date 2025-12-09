const User = require("../models/User");
const bcrypt = require("bcrypt");

const UserService = {
  create: async (userData) => {
    try {
      const { name, email, password } = userData;

      if (!name || !email || !password) {
        throw new Error("Nome, email e senha são obrigatórios.");
      }

      /* Nome */
      if (name.length < 3) {
        throw new Error("O nome deve ter pelo menos 3 caracteres.");
      } else if (name.length > 50) {
        throw new Error("O nome não pode exceder 50 caracteres.");
      }

      /* Email */
      if (await User.findOne({ where: { email } })) {
        throw new Error("Email já está em uso.");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error(
          "Email inválido. coloque um @, um domínio e um sufixo."
        );
      } else if (email.length > 100) {
        throw new Error("O email não pode exceder 100 caracteres.");
      }

      /* Senha */
      if (password.length > 100) {
        throw new Error("A senha não pode exceder 100 caracteres.");
      } else if (password.length < 6) {
        throw new Error("A senha deve ter pelo menos 6 caracteres.");
      }

      /* Construindo o usuario */
      const senha = await bcrypt.hash(password, 8);

      return await User.create({
        name,
        email: email.toLowerCase().trim(),
        password: senha,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAll: async () => {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getById: async (id) => {
    try {
      const usuario = await User.findByPk(id);
      if (!usuario) {
        throw new Error("Usuário não encontrado.");
      }
      return usuario;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = UserService;
