const router = require("express").Router();
const userController = require("../../controllers/userController");
const bookingController = require("../../controllers/bookingController")

router.route("/")
  .get(userController.findAll)
  .post(userController.create)
  .get(bookingController.findAll)
  .post(bookingController.create);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove)
  .get(bookingController.findById)
  .put(bookingController.update)
  .delete(bookingController.remove);

module.exports = router;