const ApiError = require("../exeptions/api-error");
const reviewService = require("../services/reviewService");

class ReviewController {
  async addReview(req, res, next) {
    try {
      const { userId, deviceId, userRate, userComment } = req.body;
      const device = await reviewService.addReview(
        userId,
        deviceId,
        userRate,
        userComment,
      );
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateReview(req, res, next) {
    try {
      const { id } = req.params;
      const { userRate, userComment } = req.body;
      const review = await reviewService.updateReview(
        id,
        userRate,
        userComment,
      );
      return res.json(review);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getReviewsForDevice(req, res, next) {
    try {
      const { deviceId } = req.params;
      const reviews = await reviewService.getReviewsForDevice(deviceId);
      return res.json(reviews);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const reviews = await reviewService.getAll();
      return res.json(reviews);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async confirmReview(req, res, next) {
    try {
      const { id } = req.params;
      const review = await reviewService.confirmReview(id);
      return res.json(review);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteReview(req, res, next) {
    try {
      const { id } = req.params;
      const review = await reviewService.deleteReview(id);
      return res.json(review);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new ReviewController();
