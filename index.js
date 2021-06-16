const express = require("express");

const candlesRouter = require("./routers/candles");
const usersRouter = require("./routers/users");

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

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
