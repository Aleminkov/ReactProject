require("dotenv").config();
const Express = require("express");
const ErrorHandlerMiddleware = require("./MiddleWare/ErrorHandlerMiddleware");
const cors = require("cors");
const routers = require("./routers/index");
const app = new Express();
const sequelize = require("./DB/mainDB");

const PORT = process.env.PORT || 4000;

app.use(Express.json());
app.use(cors());
app.use("/api", routers);

app.use(ErrorHandlerMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Сервер запущен на порту:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
