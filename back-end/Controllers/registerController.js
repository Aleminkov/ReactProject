const { User } = require("../DB/models");
const ApiError = require("../Error/ApiError");
const bcrypt = require("bcrypt");

class Register {
  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.interval("Неверный email!"));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.interval("Неверный пароль!"));
    }

    return res.json({ message: "Все прошло успешно", result: true });
  }

  async register(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(ApiError.badRequest("Некорректно введены данные"));
    }

    const checkEmail = await User.findOne({ where: { email } });
    if (checkEmail) {
      return next(ApiError.interval("Такой email уже существует"));
    }

    const checkName = await User.findOne({ where: { name } });
    if (checkName) {
      return next(ApiError.interval("Такое имя уже существует"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name, email, password: hashPassword });

    return res.json({
      message: "Вы успешно зарегестрировались!",
      result: true,
    });
  }

  async check(req, res, next) {
    
  }
}

module.exports = new Register();
