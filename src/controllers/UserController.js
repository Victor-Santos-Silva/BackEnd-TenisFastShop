const userService = require("../services/UserService");

const UserController = {
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

  findAll: (req, res) => {
    // Lógica para obter um usuário
    res.status(200).send("Detalhes do usuário");
  },
};

module.exports = UserController;
