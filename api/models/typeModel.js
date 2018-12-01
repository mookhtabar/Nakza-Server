'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required : true
  },    
  description: {
      type: String
  }
});

module.exports = mongoose.model('Type', TypeSchema);
