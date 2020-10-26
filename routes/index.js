const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const bookingRoutes = require("./booking");
// API Routes
router.use("/api", apiRoutes);
router.use("/api/users", userRoutes);
router.use("/api/booking", bookingRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;