const router = require("express").Router();
const userRoutes = require("./userRoutes");
const fweetRoutes = require("./fweetRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/fweets", fweetRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
