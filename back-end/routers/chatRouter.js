const Router = require("express");
const chatController = require("../Controllers/chatController");

const router = new Router();

router.get("/getMessage", chatController.findAllMessage);
router.post("/addNewMessage", chatController.addMessage);
router.delete("/deleteMessage", chatController.deleteMessage);

module.exports = router;
