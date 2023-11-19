const { Chat } = require("../DB/models");
const ApiError = require("../Error/ApiError");

class ChatController {
  //Give all messages from DB
  async findAllMessage(req, res, next) {
    const messages = await Chat.findAll();
    return res.json({ messages, result: true });
  }

  //Create new message
  async addMessage(req, res, next) {
    try {
      const { name, message } = req.body;
      if (!name || !message) {
        return next(ApiError.interval("Неккоректно введены данные"));
      }
      await Chat.create({ name, message });
      return res.json({ result: true });
    } catch (error) {
      ApiError.interval(error);
      console.log(error);
    }
  }

  //delete message from db
  async deleteMessage(req, res, next) {
    try {
      const { id } = req.body;
      if (!id) {
        return next(ApiError.badRequest("Нету id"));
      }
      await Chat.destroy({ where: { id } });
      return res.json({ result: true });
    } catch (error) {
      console.log(error);
      return next(ApiError.badRequest(error));
    }
  }
}

module.exports = new ChatController();
