const express = require("express");

const candlesRouter = require("./routers/candles");
const usersRouter = require("./routers/users");
const myToken = require("./routers/token");

const PORT = 4000;

const corsMiddleWare = require("cors");

const app = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

app.get("/", (req, res) => {
  res.send("test reposne");
});

app.use("/candles", candlesRouter);
app.use("/users", usersRouter);
app.use("/myToken", myToken);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
