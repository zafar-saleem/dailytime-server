const mongoose = require('mongoose');

const HoursSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    lowercase: true,
    required: true
  },
  finishTime: {
    type: String,
    required: true
  },
  tasks: {
    type: String,
    lowercase: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Hours', HoursSchema);
