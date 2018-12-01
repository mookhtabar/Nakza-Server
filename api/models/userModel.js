'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required : true
  },
  social_id: {
    type: String,
    required : true
  },
  photo: {
    type: String,
    required : true
  },
  bio: {
    type: String,
    required : true
  },
  creation_date: {
    type: Date,
    default: Date.now
  },
  email: {
     type: String
   },
  phone_number: {
      type: String
  },
  password: {
    type: String
  },
  salt: {
      type: String
  },
  social_platform: {
      type: String,
      enum: ['facebook', 'google'],
      required: true
  },
  prefs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
  }]
  ,
  messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
  }]
});

module.exports = mongoose.model('User', UserSchema);
