const Router = require("express");
const RegisterController = require("../Controllers/registerController");

const router = new Router();

router.get("/check", RegisterController.check);
router.post("/register", RegisterController.register);
router.post("/login", RegisterController.login);

module.exports = router;
