const Router = require("express");
const registerController = require("../Controllers/registerController");

const router = new Router();

router.get("/check", registerController.check);
router.post("/register", registerController.register);
router.post("/login", registerController.login);

module.exports = router;
