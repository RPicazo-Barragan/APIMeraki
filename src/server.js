const express = require("express");

const app = express();

const clientsRouter = require("./routes/clients");
const photographsRouter = "./routes/photographs";
const authRouter = require("./routes/auth");

app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/photographs", photographsRouter);
app.use("/auth", authRouter);

module.exports = app;
