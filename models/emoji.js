const mongoose = require('mongoose');
const emoji = mongoose.model(
  "Emoji",
  {
    name: {
      type: String,
      required: true
    },
    code: {
      type: String
    },
    surrogate_pair: {
      type: String
    },
    value: {
      type: Number
    }
  }
);

module.exports = emoji;
