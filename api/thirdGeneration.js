const express = require("express");
const router = express.Router();

router.get("/third", (req, res) => {
  res.json({ msg: "third generation of pokemon" });
});

module.exports = router;
