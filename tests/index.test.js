const {getWordIds} = require('./../index');
const {qualifyingWords, notQualifyingWords} = require('./seed/seed');
const {expect, assert, should } = require('chai');

describe('getWordIds [index.js]', () => {

  describe('Invalid Input', () => {

    it('should throw error if words passed are less than 3', () => {
      var error = null;
      var result = null;
      try {
        getWordIds([],[]);
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(result).to.be.null;
    });

    it('should throw error if numberOfTimesLearned is not 0' +
    ' in atleast 3 of the words passed as input', () => {
      var error = null;
      var result = null;
      try {
        getWordIds(notQualifyingWords,[]);
      } catch (e) {
        error = e;
      }
      expect(error).to.not.be.null;
      expect(result).to.be.null;
    });

  });

  describe('Valid Input', () => {

    it('should return 3 strings if numberOfTimesLearned is > 0'  +
    ' in atleast 3 of the words passed as input', () => {
      var error = null;
      var result = null;
      try {
        result = getWordIds(qualifyingWords.slice(0, 6), ["1", "2", "3", "4"]);
        // Advanced testing - For valid input pass atleast 3 qualifying words
        // result = getWordIds(qualifyingWords.slice(0,3)
        //            .concat(notQualifyingWords.slice(0,2)),
        //            ['1', '2', '3', '4', '5']);
      } catch (e) {
        error = e;
      }
      expect(error).to.be.null;
      expect(result).to.not.be.null;
      expect(result.length).to.be.equal(3);
      expect(typeof result[0]).to.be.equal('string');
      expect(typeof result[1]).to.be.equal('string');
      expect(typeof result[2]).to.be.equal('string');
    });

  })

});
