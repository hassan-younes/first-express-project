const express = require("express");

const {
  getFriends,
  getFriend,
  putFriends,
  postFriends,
} = require("../controllers/friends.controller.js");

const friendsRouter = express.Router();

friendsRouter.put("/", putFriends);
friendsRouter.get("/", getFriends);
friendsRouter.post("/", postFriends);

friendsRouter.get("/:friendId", getFriend);

module.exports = friendsRouter;
