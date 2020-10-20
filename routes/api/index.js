const router = require("express").Router();
const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const memberRoutes = require("./member");
const bookingRoutes = require("./member/booking");

router.use("/login", loginRoutes);
router.use("/member", memberRoutes);
router.use("/signup", signupRoutes);
router.use("/member/booking", bookingRoutes);

module.exports = router;
