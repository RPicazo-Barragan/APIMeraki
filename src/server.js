const express = require("express");

const app = express();

const clientsRouter = require("./routes/clients");
const authRouter = require("./routes/auth");

app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/auth", authRouter);

module.exports = app;
