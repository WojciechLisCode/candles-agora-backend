const { Router } = require("express");

const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const candles = await Candle.findAndCountAll({
    include: [{ model: User, as: "had" }],
  });
  res.status(200).send({ message: "ok", candles });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const candleDetails = await Candle.findByPk(id, {
    include: [{ model: User, as: "had" }],
  });
  res.status(200).send({ message: "ok", candleDetails });
});

module.exports = router;
