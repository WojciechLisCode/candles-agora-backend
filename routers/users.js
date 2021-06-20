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
  const users = await User.findAndCountAll({
    where: {
      name: { [Op.like]: `%${req.query.searchInput}%` },
    },
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
