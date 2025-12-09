const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./models");
require("dotenv").config();

const app = express();
app.use(express.json());

// Rotas
app.use("/api", routes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexao com o banco de dados deu certo.");
  })
  .catch((err) => {
    console.log("Erro ao conectar no banco: ", err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
