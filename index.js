const _ = require('lodash');
const getWordIds = (words, idsLearnedInLesson) => {
  // Perform input validation
  // Filter out words that do not meet criteria
  // return selectWords(validWords)
}

const selectWords = (validWords, idsLearnedInLesson) => {
  var scores = computeScores(validWords, idsLearnedInLesson);
  var wordsAndScores = _.zip(validWords, scores);
  var wordsSortedByScores = _.sortBy(wordsAndScores, (tuple) => {
    return tuple[1]; // tuple[1] is score
  });
  var selectedTuples = wordsSortedByScores.slice(0,3);
  var selectedWords = tuples.map((tuple) => tuple[0]);
  return selectedWords;
}

const computeScores = (word, idsLearnedInLesson) => {
  // Params represent weights as follows
  // params[0] -> weight for hasAlreadyCollected
  // params[1] -> weight for numberOfTimesLearned
  // params[2] -> weight for if word was learned in this lesson
  var params = [0.5, 0.35, 0.15];

  var variables = [0,0,0];
  variables[0] = word.hasAlreadyCollected ? 1 : 0;
  variables[1] = word.numberOfTimesLearned;
  variables[2] = word.id in idsLearnedInLesson ? 1 : 0;

  var score = params[0] * variables[0] +
  params[1] * variables[1] +
  params[2] * variables[2];

  return score;
}
