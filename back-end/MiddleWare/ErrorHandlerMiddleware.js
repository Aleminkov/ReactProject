const ApiError = require("../Error/ApiError");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message, result: false });
  }
  return res.status(500);
};
