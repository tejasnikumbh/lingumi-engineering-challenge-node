const _ = require('lodash');

/**
* Module for solution to engineering-challenge-node for lingumi-software
*
* The general idea for the function is to compute scores and associate them
* with given words. We then sort the words by the score and return the first
* three words.
*
* Author:- Tejas Nikumbh
* Copyright:- Tejas Nikumbh, 2018
**/

// Core interface function that selects 3 words (or throws error)
const getWordIds = (words, idsLearnedInLesson) => {
  // Perform input validation
  if(!words || words.length < 3) { throw new Error('invalid input - words')}
  var validWords = words.filter((word) => word.numberOfTimesLearned > 0);
  if(validWords.length < 3) { throw new Error('invalid input - less than 3 valid words')}
  // Return selected words
  return _selectWords(validWords, idsLearnedInLesson);
}

// Selects  3 words from valid words by sorting them according to score
const _selectWords = (validWords, idsLearnedInLesson) => {
  var scores = validWords.map((word) => _computeScores(word, idsLearnedInLesson));

  var wordsAndScores = _.zip(validWords, scores);
  var wordsSortedByScores = _.sortBy(wordsAndScores, (tuple) => {
    return tuple[1]; // tuple[1] is score
  }).reverse(); //  reversing so it is in descending order of score

  var selectedTuples = wordsSortedByScores.slice(0,3);
  var selectedWordIds = selectedTuples.map((tuple) => tuple[0].id);
  // console.log(selectedTuples);
  // console.log(selectedWordIds);
  return selectedWordIds;
}

// Computes priority score for a given word. The score is always [0,1]
// Note:- Normalization factor for numberOfTimesLearned is kept 20, which
// is assumed to be a reasonable estimate of number of times a word needs to
// be learned for a child to achieve mastery of it.
const _computeScores = (word, idsLearnedInLesson) => {
  // Params represent weights as follows
  // params[0] -> weight for hasAlreadyCollected
  // params[1] -> weight for numberOfTimesLearned
  // params[2] -> weight for if word was learned in this lesson
  var params = [0.5, 0.35, 0.15];

  var variables = [0,0,0];
  variables[0] = word.hasAlreadyCollected ? 0 : 1;
  variables[1] = _.min([(word.numberOfTimesLearned / 20.0), 1]);
  // checks if word.id was is in idsLearnedInLesson array
  variables[2] = (idsLearnedInLesson.indexOf(word.id) > -1) ? 1 : 0;

  var score = params[0] * variables[0] +
  params[1] * variables[1] +
  params[2] * variables[2];

  return score;
}

module.exports = { getWordIds }
