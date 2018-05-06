const {Word} = require('./../../models/word');

var notQualifyingWordData = [
  {
    id: "1",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 0
  },
  {
    id: "2",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 0
  },
  {
    id: "3",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 0
  },
  {
    id: "4",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 0
  }
];

var qualifyingWordData = [
  {
    id: "5",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 37
  },
  {
    id: "6",
    hasAlreadyCollected: true,
    numberOfTimesLearned: 1
  },
  {
    id: "7",
    hasAlreadyCollected: true,
    numberOfTimesLearned: 2
  },
  {
    id: "7",
    hasAlreadyCollected: true,
    numberOfTimesLearned: 27
  },
  {
    id: "8",
    hasAlreadyCollected: true,
    numberOfTimesLearned: 3
  },
  {
    id: "9",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 4
  },
  {
    id: "10",
    hasAlreadyCollected: true,
    numberOfTimesLearned: 5
  },
  {
    id: "11",
    hasAlreadyCollected: false,
    numberOfTimesLearned: 6
  }
];

var notQualifyingWords = notQualifyingWordData.map((data) => new Word(data));
var qualifyingWords = qualifyingWordData.map((data) => new Word(data));

module.exports = {qualifyingWords, notQualifyingWords};
