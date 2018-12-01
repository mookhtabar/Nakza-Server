'use strict';


var mongoose = require('mongoose'),
  Message = mongoose.model('Message');

exports.list_all_messages = function(req, res) {
  Message.find({}, function(err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};

exports.create_a_message = function(req, res) {
  var new_message = new Message(req.body);
  new_message.save(function(err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.read_a_message = function(req, res) {
  message.findById(req.params.messageId, function(err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.update_a_message = function(req, res) {
  message.findOneAndUpdate({_id: req.params.messageId}, req.body, {new: true}, function(err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.delete_a_message = function(req, res) {
  message.remove({
    _id: req.params.messageId
  }, function(err, message) {
    if (err)
      res.send(err);
    res.json({ message: 'message successfully deleted' });
  });
};