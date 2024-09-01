let friends = require("../models/friends.model");

function getFriends(req, res) {
  if (friends) {
    res.json(friends);
  }
}

function postFriends(req, res) {
  if (!req.body.friendName) {
    return res.status(400).send({ error: "bad request" });
  }
  console.log(req);
  const newFriend = {
    id: friends.length,
    friendName: req.body.friendName,
  };

  friends.push(newFriend);
  res.json({ addedFriend: newFriend, friends: friends });
}
function getFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];

  console.log(typeof friendId);
  if (friendId >= 0) {
    res.json(friend);
  } else {
    res.send(
      "<html><head><title>get friends</title></head><body><p>please enter a number</p><body></body></html>"
    );
  }
}
function putFriends(req, res) {
  if (!req.body) {
    return res.status(400).send({ error: "bad request" });
  }
  friends = [];
  req.body.map((friend) => friends.push(friend));
  console.log(friends);
  res.send(friends);
}
module.exports = {
  getFriends,
  getFriend,
  putFriends,
  postFriends,
};
