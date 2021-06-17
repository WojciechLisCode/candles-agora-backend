const { Router } = require("express");

const User = require("../models").user;
const Candle = require("../models").candle;

const router = new Router();

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: [
      { model: Candle, as: "had" },
      { model: Candle, as: "have" },
      { model: Candle, as: "wants" },
      { model: Candle, as: "dontNeed" },
    ],
  });
  res.status(200).send({ message: "ok", users });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userDetails = await User.findByPk(id, {
    include: [
      { model: Candle, as: "had" },
      { model: Candle, as: "have" },
      { model: Candle, as: "wants" },
      { model: Candle, as: "dontNeed" },
    ],
  });

  res.status(200).send({ message: "ok", userDetails });
});

module.exports = router;
