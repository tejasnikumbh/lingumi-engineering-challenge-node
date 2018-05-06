const {qualifyingWords, notQualifyingWords} = require('./seed/seed');
const {expect, assert, should } = require('chai');

describe('Testing \'getWordIds\'', () => {

  it('should throw error if words passed are less than 3', () => {
    var error = null;
    var result = null;
    try {
      // Call the function with apt params here
    } catch (e) {
      error = e;
    }
    expect(error).to.not.be.null;
    expect(result).to.be.null;
  });

  it('should throw error if numberOfTimesLearned is not 0' +
  'in atleast 3 of the words passed as input', () => {
    var error = null;
    var result = null;
    try {
      // Call the function with apt params here
    } catch (e) {
      error = e;
    }
    expect(error).to.not.be.null;
    expect(result).to.be.null;
  });

  it('should return 3 strings if numberOfTimesLearned is > 0'  +
  'in atleast 3 of the words passed as input', () => {
    var error = null;
    var result = null;
    try {
      // Call the function with apt params here
    } catch (e) {
      error = e;
    }
    expect(error).to.be.null;
    expect(result).to.not.be.null;
    expect(result.length).to.be.equal(3);
    expect(typeof result[0]).to.be.equal(String);
    expect(typeof result[1]).to.be.equal(String);
    expect(typeof result[2]).to.be.equal(String);
  });

});
