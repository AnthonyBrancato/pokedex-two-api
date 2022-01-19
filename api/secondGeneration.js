const express = require("express");
const router = express.Router();

router.get("/second", (req, res) => {
  res.json({ msg: "second generation of pokemon" });
});

module.exports = router;
