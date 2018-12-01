'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.findByEmail = function(req, res) {

    var regex = new RegExp(req.params.email, "i")
    ,   query = { email: regex };

    User.find(query, function(err, products) {
        if (err) {
            res.json(err);
        }

        res.json(products);
    });

};

exports.findByPhoneNumber = function(req, res) {

    var regex = new RegExp(req.params.phone, "i")
    ,   query = { phone_number: regex };

    User.find(query, function(err, products) {
        if (err) {
            res.json(err);
        }

        res.json(products);
    });

};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.send_msg = function(req, res) {
  User.updateOne(
    { _id: req.params.userId }, 
    { $push: { messages: req.body.message } });
};



exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};
