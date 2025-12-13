const { get } = require("../routes/user.routes");
const userService = require("../services/UserService");

const UserController = {
  login: async (req, res) => {
    try {
      const login = await userService.login(req.body);

      return res.status(201).json({
        status: "Sueccess 201",
        msg: "Login realizado com sucesso.",
        login,
      });
    } catch (error) {
      return res.status(401).json({
        status: "error 401",
        msg: error.message,
      });
    }
  },

  create: async (req, res) => {
    try {
      const usuario = await userService.create(req.body);
      return res.status(201).json({
        status: "success 201",
        msg: "Usuário criado com sucesso",
        usuario,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error 500",
        msg: "Erro ao criar usuário: " + error.message,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const usuarios = await userService.getAll();

      return res.status(200).json({
        status: "success 200",
        msg: "Lista de usuários",
        usuarios,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error 500",
        msg: "Erro ao buscar usuários: " + error.message,
      });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await userService.getById(id);
      return res.status(200).json({
        status: "success 200",
        msg: "Usuário encontrado",
        usuario,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error 500",
        msg: "Erro ao buscar usuário: " + error.message,
      });
    }
  },
};

module.exports = UserController;
