'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
 type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
  },
  friends: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Friend'
  },
  from: {
    type: Number,
    required : true
  },
  description: {
      type: String
  }
});

module.exports = mongoose.model('Message', MessageSchema);
