const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const checkRole = require("../middlewares/check-role-middleware");
const reviewController = require("../controllers/reviewController");

router.post("/", checkRole("ADMIN"), deviceController.create);

router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.get("/:id/reviews", reviewController.getReviewsForDevice);

router.delete("/:id", checkRole("ADMIN"), deviceController.deleteOne);

module.exports = router;
