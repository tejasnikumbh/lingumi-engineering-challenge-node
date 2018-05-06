const mongoose = require('mongoose');
const WordSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  hasAlreadyCollected: {
    type: Boolean
  },
  numberOfTimesLearned: {
    type: Number,
    min: 0
  }
});

const Word = mongoose.model('Word', WordSchema);

module.exports = {Word}
