const Router = require("express");
const router = new Router();
const reviewController = require("../controllers/reviewController");
const checkRole = require("../middlewares/check-role-middleware");
const reviewService = require("../services/reviewService");

router.post("/", reviewController.addReview);

router.put("/:id", reviewController.updateReview);
router.put("/:id/confirm", reviewController.confirmReview);

router.get("/", reviewController.getAll);
router.get("/:deviceId", reviewController.getReviewsForDevice);

router.delete("/:id", reviewController.deleteReview);

module.exports = router;
