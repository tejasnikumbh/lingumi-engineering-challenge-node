# Lingumi Software Engineering Challenge (nodejs)

- This is a submission for the Lingumi Software Engineering Challenge using nodejs
- The version of node used for this project is **9.11.1**

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
  - 0.5 for hasAlreadyCollected
    - This variable has the highest parameter value since it's intuitive to think that the child would want to accumulate word stickers for a variety of words, and not just one word.
  - 0.35 for numberOfTimesLearned
    - This value is the second most highest one. It is important to keep the parameter value high since having this value high keeps the reward more valuable. Hypothetically, if this was 1 instead of 0.35, the child would be awarded only for words that he has learned most, thereby getting rewards for words that have been learned lesser number of times more difficult.
  - 0.15 for learnedInThisLesson
    - This value is the lowest since I believe if the child has only recently learned a word, she should not be provided a reward just yet since there needs to be more learning in order to learn the word better. However, keeping in mind child psychology, relevance is important and getting reward for a word just learned also adds to excitement. Hence the value.

### How could you improve/evolve the algorithm if given more time?
Having kept a score based on parameter values, it is easy to modify the decision making process of the algorithm. We have decided the intial parameter values based on intuition and subjective thinking. These parameter values could be fine tuned based on data obtained from the app on child engagement based on this algorithm. Techniques such as machine learning (linear regression), or simpler data analysis, can be applied to fine-tune these parameter values.

## Checklist
As a final check list:

- [x] Design the algorithm
- [x] Write pseudo code on a piece of paper
- [x] Answer questions asked in challenge
- [ ] Complete coding the solution
- [ ] Add testing support (modules + scripts) and write tests
- [ ] Document testing instructions (running test-scripts + adding test cases)
- [ ] Send an email to george@lingumi.com with link to the repository

## Author
- Tejas Nikumbh
  - Email: tejnikumbh@gmail.com
  - Skype: tjnikumbh
