const { Router } = require("express");
const Sequelize = require("sequelize");

const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const User = require("../models").user;
const Candle = require("../models").candle;
const IWantCandle = require("../models").iWantCandle;
const IHaveCandle = require("../models").iHaveCandle;
const IDidHaveCandle = require("../models").iDidHaveCandle;
const ICanSellCandle = require("../models").iCanSellCandle;

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

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);

  const candleDetails = await Candle.destroy({
    where: { id: req.params.id },
  });
  res.status(200).send({ candleDetails });
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

router.post("/newConnection/iWantCandle", async (req, res) => {
  console.log(req.body);
  const { connectionText, candleId, userId } = req.body;
  const connection = await IWantCandle.create({
    connectionText: connectionText,
    candleId: candleId,
    userId: userId,
  });
});

router.delete("/deleteConnection/iWantCandle/:id", async (req, res) => {
  console.log(req.params.id);
  const connection = await IWantCandle.destroy({
    where: { candleId: req.params.id },
  });
});

router.post("/newConnection/iHaveCandle", async (req, res) => {
  console.log(req.body);
  const { connectionText, candleId, userId } = req.body;
  const connection = await IHaveCandle.create({
    connectionText: connectionText,
    candleId: candleId,
    userId: userId,
  });
});

router.delete("/deleteConnection/iHaveCandle/:id", async (req, res) => {
  console.log(req.params.id);
  const connection = await IHaveCandle.destroy({
    where: { candleId: req.params.id },
  });
});

router.post("/newConnection/iDidHaveCandle", async (req, res) => {
  console.log(req.body);
  const { connectionText, candleId, userId } = req.body;
  const connection = await IDidHaveCandle.create({
    connectionText: connectionText,
    candleId: candleId,
    userId: userId,
  });
});

router.delete("/deleteConnection/iDidHaveCandle/:id", async (req, res) => {
  console.log(req.params.id);
  const connection = await IDidHaveCandle.destroy({
    where: { candleId: req.params.id },
  });
});

router.post("/newConnection/iCanSellCandle", async (req, res) => {
  console.log(req.body);
  const { connectionText, candleId, userId } = req.body;
  const connection = await ICanSellCandle.create({
    connectionText: connectionText,
    candleId: candleId,
    userId: userId,
  });
});

router.delete("/deleteConnection/iCanSellCandle/:id", async (req, res) => {
  console.log(req.params.id);
  const connection = await ICanSellCandle.destroy({
    where: { candleId: req.params.id },
  });
});

module.exports = router;
