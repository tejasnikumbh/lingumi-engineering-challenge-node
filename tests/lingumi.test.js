const {getWordIds} = require('./../index');
const {qualifyingWords, notQualifyingWords} = require('./seed/seed');
const {expect, assert, should } = require('chai');


describe('Lingumi test cases - getWordIds [index.js]', () => {
  // Testing blocks for lingumi team
  it('Describe what test case should do if passing', () => {
    var error = null;

    // TODO:- Comment the first line and uncomment the second
    var result = ["valid id 1", "valid id 2", "valid id 3"];
    // var result = [];
    try {
      // TODO:- Add your testing here, follow the templates below if necessary

      // Basic Testing Template - Simple qualifying seed data
      // var wordList = qualifyingWords.slice(0,6);
      // var idsLearnedInLesson = ["1", "2", "3", "4"];
      // result = getWordIds(wordList, idsLearnedInLesson);

      // Advanced Testing Template- Combination of seed data
      // result = getWordIds(qualifyingWords.slice(0,3)
      //            .concat(notQualifyingWords.slice(0,2)),
      //            ['1', '2', '3', '4', '5']);
    } catch (e) {
      error = e;
    }
    // Expected error state - can be null or not null
    expect(error).to.be.null;
    // Expected result state - can be null or not null
    expect(result).to.not.be.null;
    // Since result is array of 3 strings
    expect(result.length).to.be.equal(3);
    expect(typeof result[0]).to.be.equal('string');
    expect(typeof result[1]).to.be.equal('string');
    expect(typeof result[2]).to.be.equal('string');
    var resultSet = new Set(result);
    // All elements unique
    expect(resultSet.size).to.be.equal(result.length);
  });
});
