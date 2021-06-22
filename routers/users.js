const { Router } = require("express");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const nodemailer = require("nodemailer");
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

  delete user.dataValues["password"];

  const token = toJWT({ userId: user.id });
  return res.status(200).send({ token, ...user.dataValues });
});

router.post("/send", function (req, res, next) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: "candles_agora@hotmail.com",
      pass: "candlesproject21 ",
    },
  });
  const mailOptions = {
    from: `candles_agora@hotmail.com`,
    to: "wlis58372@gmail.com",
    subject: `New message from `,
    text: `Message from <b>${req.body.senderName}<b>`,
    html: `Message from <b><a href=http://localhost:3000/user/${req.body.senderId}>${req.body.senderName}</a><b><br>
    ${req.body.message}`,
  };
  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
  res.status(200).send("Message was sent to this user email address");
});

module.exports = router;
