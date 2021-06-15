const express = require("express");

const candlesRouter = require("./routers/candles");
const usersRouter = require("./routers/users");

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("test reposne");
});

app.use("/candles", candlesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
