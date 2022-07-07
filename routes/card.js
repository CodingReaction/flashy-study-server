const express = require("express");

const CARDS_DATA = require("./../mock_data/card");

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.status(200).json(CARDS_DATA);
});

module.exports = router;
