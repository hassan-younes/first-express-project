const express = require("express");

const {
  getMessages,
  postMessages,
} = require("../controllers/messages.contoller");

const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);
messagesRouter.post("/", postMessages);

module.exports = messagesRouter;
