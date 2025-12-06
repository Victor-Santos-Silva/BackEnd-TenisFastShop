const UserService = require("../services/UserService");

module.exports = {
  async findAll(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },
};
