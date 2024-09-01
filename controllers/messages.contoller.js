const path = require("path");

let message = require("../models/messages.model");

function getMessages(req, res) {
  res.render("index", { name: "John" });
}
function postMessages(req, res) {
  if (!req.body) {
    res.status(404).send({ error: "bad request" });
  }

  message = req.body;
  res.send(message);
}
module.exports = { getMessages, postMessages };
