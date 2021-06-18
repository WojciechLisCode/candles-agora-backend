const { Router } = require("express");
const Sequelize = require("sequelize");

const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const User = require("../models").user;
const Candle = require("../models").candle;

const router = new Router();

const Op = Sequelize.Op;
const searchInput = "";
router.get("/", async (req, res) => {
  console.log(req.query);
  const candles = await Candle.findAndCountAll({
    where: {
      name: { [Op.like]: `%${req.query.searchInput}%` },
    },
    include: [
      { model: User, as: "had" },
      { model: User, as: "have" },
      { model: User, as: "wants" },
      { model: User, as: "dontNeed" },
    ],
  });
  res.status(200).send({ message: "ok", candles });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const candleDetails = await Candle.findByPk(id, {
    include: [
      { model: User, as: "had" },
      { model: User, as: "have" },
      { model: User, as: "wants" },
      { model: User, as: "dontNeed" },
    ],
  });
  res.status(200).send({ message: "ok", candleDetails });
});

router.post("/newCandle", async (req, res) => {
  console.log(req.body);
  const { candleName, candleDescription, candleImageUrl } = req.body;

  const candle = await Candle.create({
    name: candleName,
    description: candleDescription,
    imageUrl: candleImageUrl,
  });
  const newCandle = await Candle.findAll({
    where: {
      name: candleName,
    },
  });
  console.log(newCandle);
  const newCandleId = newCandle[0].id;
  res.status(200).send({ message: "Auction added succesfully", newCandleId });
});
module.exports = router;
