const express = require("express");

const app = express();

const clientsRouter = require("./routes/clients");
const authRouter = require("./routes/auth");
const offersRouter = require("./routes/offers");

app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/auth", authRouter);
app.use("/offers", offersRouter);

module.exports = app;
