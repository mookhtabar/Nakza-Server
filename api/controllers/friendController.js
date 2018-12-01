'use strict';


var mongoose = require('mongoose'),
  Friend = mongoose.model('Friend');

exports.list_all_friends = function(req, res) {
  Friend.find({}, function(err, friend) {
    if (err)
      res.send(err);
    res.json(friend);
  });
};

exports.create_a_friend = function(req, res) {
  var new_friend = new Friend(req.body);
  new_friend.save(function(err, friend) {
    if (err)
      res.send(err);
    res.json(friend);
  });
};


exports.read_a_friend = function(req, res) {
  friend.findById(req.params.friendId, function(err, friend) {
    if (err)
      res.send(err);
    res.json(friend);
  });
};


exports.update_a_friend = function(req, res) {
  friend.findOneAndUpdate({_id: req.params.friendId}, req.body, {new: true}, function(err, friend) {
    if (err)
      res.send(err);
    res.json(friend);
  });
};


exports.delete_a_friend = function(req, res) {
  friend.remove({
    _id: req.params.friendId
  }, function(err, friend) {
    if (err)
      res.send(err);
    res.json({ message: 'friend successfully deleted' });
  });
};