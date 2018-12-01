'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendSchema = new Schema({
 
 friend1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
  },
  friend2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
  },
  state: {
    type: Number
  },
  types: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
  }]
});

module.exports = mongoose.model('Friend', FriendSchema);
