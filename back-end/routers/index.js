const Router = require("express");
const registerRouter = require("./registerRouter");
const reviewRouter = require("./reviewRouter");
const chatRouter = require("./reviewRouter");

const routers = new Router();

routers.use("/register", registerRouter);
routers.use("/review", reviewRouter);
routers.use("/chat", chatRouter);

module.exports = routers;
