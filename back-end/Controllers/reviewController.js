const { Review } = require("../DB/models");
const ApiError = require("../Error/ApiError");

class ReviewController {
  //create new review
  async addReview(req, res, next) {
    try {
      const { name, star, text } = req.body;

      if (!star) {
        return next(ApiError.badRequest("Вы не поставили звезду!"));
      } else if (!text) {
        return next(ApiError.badRequest("Напишите хоть одно слово!"));
      }

      await Review.create({ name, star, text });

      return res.json({
        result: true,
      });
    } catch (error) {
      console.log(error);
      ApiError.badRequest("Что то пошло не так");
    }
  }

  //give all review from DB
  async findAllReviews(req, res, next) {
    const allReview = await Review.findAll();
    if (!allReview) {
      return next(ApiError.interval("Отзывы не найдены"));
    }
    return res.json({
      result: true,
    });
  }
}

module.exports = new ReviewController();
