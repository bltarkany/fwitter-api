const router = (require = "express".Router());
const apiRoutes = require("./api");

// establish the initial url param '/api'
router.use("/api", apiRoutes);

// wrong route catch
router.use("*", (req, res) => {
  res.send(`Sorry your URL is invalid, check your request &#128206;`);
});

module.exports = router;
