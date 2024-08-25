const ApiError = require("../exeptions/api-error");
const { Review, Device } = require("../models/models");
const deviceService = require("./deviceService");

class ReviewService {
  async addReview(userId, deviceId, userRate, userComment) {
    const candidate = await Device.findOne({ where: { id: deviceId } });
    if (!candidate) {
      throw ApiError.badRequest(`Device not found`);
    }

    const isReviewExist = await Review.findOne({ where: { userId, deviceId } });
    if (isReviewExist) {
      throw ApiError.badRequest(`Review is exist`);
    }

    const review = await Review.create({
      userId,
      deviceId,
      rate: userRate,
      comment: userComment,
    });

    await deviceService.updateRating(review.deviceId);
    return review;
  }

  async updateReview(id, userRate, userComment) {
    const review = await Review.findByPk(id);
    if (!review) {
      throw ApiError.badRequest(`Review not found`);
    }

    await review.update({
      rate: userRate,
      comment: userComment,
      confirmed: false,
    });

    await deviceService.updateRating(review.deviceId);
    return review;
  }

  async confirmReview(id) {
    const review = await Review.findByPk(id);
    if (!review) {
      throw ApiError.badRequest(`Review not found`);
    }

    await review.update({ confirmed: true });
    return review;
  }

  async getReviewsForDevice(deviceId) {
    const reviews = await Review.findAll({
      where: { deviceId, confirmed: true },
    });
    return reviews;
  }

  async getAll() {
    const reviews = await Review.findAll();
    return reviews;
  }

  async deleteReview(id) {
    const review = await Review.findByPk(id);
    if (!review) {
      throw ApiError.badRequest(`You doesn't rate this device`);
    }

    await review.destroy();
    await deviceService.updateRating(review.deviceId);
    return review;
  }
}
module.exports = new ReviewService();
