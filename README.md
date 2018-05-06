# Lingumi Software Engineering Challenge (nodejs)

- This is a submission for the Lingumi Software Engineering Challenge using nodejs
- The version of node used for this project is **9.11.1**

## Testing Instructions
Following are the instructions for running the test suite, and adding test cases

### Running tests
- After cloning the repository, use the following to install all dependencies from root of project
  ``` javascript
  npm install
  ```

- Then use the following for running the test suite
  ``` javascript
  npm test
  ```

### Adding test cases
Go to [index.test.js](tests/index.test.js) to see all the test cases. You will find testing blocks for
valid and invalid input tests. The current format the testing blocks follow is
outlined below
``` javascript
it('<decribe what test should do>', () => {
  var error = null;
  var result = null;
  try {
    var wordList = [];
    var idsLearnedInLesson = [];
    // calling the core function and storing result
    result = getWordIds(wordList, idsLearnedInLesson);
  } catch (e) {
    error = e;
  }
  // Expected error state - can be null or not null
  expect(error).to.not.be.null;
  // Expected result state - can be null or not null
  expect(result).to.be.null;
});
```

I have created a [seperate file](tests/lingumi.test.js) for Lingumi to add test cases for this project. You can simply uncomment the commented code and modify it to modify or create a test case.

Concretely, you will only have to change the wordList and idsLearnedInLesson parameters.

The wordList can be populated via seed data (using qualifyingWords and notQualifyingWords) or custom built. idsLearnedInLesson is a simple string array. <br/>

You can check out the seed data used in [seed data](/tests/seed/seed.js)

To use seed data simply slice or use the qualifyingWords array or notQualifyingWords array or a combination of both (concat, slice etc.) as the wordList.

To custom build a wordList, follow the following syntax -
``` javascript
var wordList = [
  new Word({
    id: <Some String>,
    hasAlreadyCollected: <true or false>
    numberOfTimesLearned: <sensible number value > 0>
  }),
  new Word(<same as above>)
];
```
I have used mongoose to build model for Word, which can be found in the [Word](/models/word.js) model.

Example of an idsLearnedInLesson array -
``` javascript
var idsLearnedInLesson = [ "1", "2", "3" and so on];
```

Run **npm test** when done and saved.

## Answers to Questions

### How does the Algorithm work from a high-level perspective?
The code design has the following overview -
- The code checks if a solution exists by filtering out the words that do not meet the required criteria.
- It then uses a subroutine to determine the words that are chosen (the algorithm).
- The algorithm uses the concept of variable weightage across the variables such as 'hasAlreadyCollected' (if child has already collected the word), 'numberOfTimesLearned' (number of times word was learned) and whether the word was learned in this lesson to compute a score.
- Words are sorted based on this score and the top three ids are returned.

### Why did you choose to implement the algorithm in this way?
- The idea of computing a score for the qualifying words lies at the heart of the algorithm. The score is a parametrised weighted average model because it allows us to fine-tune the parameters to obtain optimum results.
- The initial values for parameters and explanations are given
  - 0.40 for hasAlreadyCollected
    - This variable has the highest parameter value since it's intuitive to think that the child would want to accumulate word stickers she has not already collected. She would crave for rewards for a variety of words, and not just the same word over and over again. 
  - 0.30 for numberOfTimesLearned
    - This value is the second most highest one. It is important to keep the parameter value considerable since this value makes the reward more valuable. For example, if this was 1 instead of 0.25, the child would be awarded only for words that he has learned most, making getting rewarded for lesser learnt words more difficult. The child has to essentially learn a word over and over again if she wants to get rewarded for it.
  - 0.30 for learnedInThisLesson
    - This value is also considerable since I believe relevance is important. Getting rewarded for a word just learned also adds to excitement. Hence the value. This is the sole basis for keeping this value considerable, and having it's weight same as numberOfTimesLearned.

### How could you improve/evolve the algorithm if given more time?
We have decided the intial parameter values based on intuition and subjective thinking. Having kept a score based on parameter values, it is easy to modify the decision making process of the algorithm. These parameter values could be fine tuned based on data obtained from the app on child engagement based on this algorithm. Techniques such as machine learning (linear regression), or simpler data analysis, can be applied to fine-tune the parameter values.

## Checklist
As a final check list:

- [x] Design the algorithm
- [x] Write pseudo code on a piece of paper
- [x] Answer questions asked in challenge
- [x] Complete coding the solution
- [x] Add testing support (modules + scripts) and write tests
- [x] Document testing instructions (running test-scripts + adding test cases)
- [x] Send an email to george@lingumi.com with link to the repository

## Author
- Tejas Nikumbh
  - Email: tejnikumbh@gmail.com
  - Skype: tjnikumbh
