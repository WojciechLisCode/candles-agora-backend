const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

const PORT = process.env.PORT || 4000;

const candlesRouter = require("./routers/candles");
const usersRouter = require("./routers/users");
const myToken = require("./routers/token");

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.get("/", (req, res) => {
  res.send("test reposne");
});

app.use("/candles", candlesRouter);
app.use("/users", usersRouter);
app.use("/myToken", myToken);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
