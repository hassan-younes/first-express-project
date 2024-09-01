const express = require("express");
const path = require("path");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  const start = Date.now();

  console.log(`${req.baseUrl}${req.url}, ${req.method}`);

  next();

  const delta = Date.now() - start;
  console.log(delta, "ms");
});

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
var options = { beautify: true };
app.engine("jsx", require("express-react-views").createEngine(options));

app.use(express.json());
app.use("/home", express.static(__dirname + "/public"));
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`listening on`, ` http://localhost:${PORT}`);
});
