'use strict';


var mongoose = require('mongoose'),
  Type = mongoose.model('Type');

exports.list_all_types = function(req, res) {
  Type.find({}, function(err, type) {
    if (err)
      res.send(err);
    res.json(type);
  });
};

exports.create_a_type = function(req, res) {
  var new_type = new Type(req.body);
  new_type.save(function(err, type) {
    if (err)
      res.send(err);
    res.json(type);
  });
};


exports.read_a_type = function(req, res) {
  type.findById(req.params.typeId, function(err, type) {
    if (err)
      res.send(err);
    res.json(type);
  });
};


exports.update_a_type = function(req, res) {
  type.findOneAndUpdate({_id: req.params.typeId}, req.body, {new: true}, function(err, type) {
    if (err)
      res.send(err);
    res.json(type);
  });
};


exports.delete_a_type = function(req, res) {
  type.remove({
    _id: req.params.typeId
  }, function(err, type) {
    if (err)
      res.send(err);
    res.json({ message: 'type successfully deleted' });
  });
};