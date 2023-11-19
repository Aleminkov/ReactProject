const Router = require("express");
const reviewController = require("../Controllers/reviewController");

const router = new Router();

router.get("/getReview", reviewController.findAllReviews);
router.post("/addReview", reviewController.addReview);

module.exports = router;
