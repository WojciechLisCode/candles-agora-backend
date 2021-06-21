const { Router } = require("express");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const { toJWT } = require("../auth/jwt");

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

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ message: "Please provide both email and password" });
  }

  const user = await User.findOne({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).send({
      message: "User with that email not found or password incorrect",
    });
  }

  delete user.dataValues["password"]; // don't send back the password hash

  const token = toJWT({ userId: user.id });
  return res.status(200).send({ token, ...user.dataValues });
});

module.exports = router;
