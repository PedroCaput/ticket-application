const UserController = require('./controllers/UserController');
const checkToken = require('./middleware/checkToken'); 
const express = require("express");
require("dotenv").config();

const app = express();

// Config JSON response
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Open Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem-vindo à API!" });
});

// Private Route
app.get("/user/:id", checkToken, UserController.getUser);

// Public Routes
app.post("/auth/register", UserController.register);
app.post("/auth/login", UserController.login);

// Conectar ao banco
require("./config/db");

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});