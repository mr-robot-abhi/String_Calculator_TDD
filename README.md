#   String_Calculator_TDD_Kata
Input: a string of comma-separated numbers | Output: an integer, sum of the numbers

##  Step 1: Setup

***Initialize a TypeScript Project:**

npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init

***Setup Testing Framework:**
Install Jest for testing.

npm install jest ts-jest @types/jest --save-dev
npx ts-jest config:init

***Create Project Structure:**
1. src
     - calculator.ts
2. tests
     - calculator.test.ts
  
##  Write Tests and Implementation

**1. src/calculator.ts:**

- The add function first checks if the input string is empty, returning 0 if it is.
- It then checks for a custom delimiter, parsing it if present.
- It splits the input string into individual numbers using the identified delimiter(s).
- It filters for any negative numbers, throwing an exception if any are found.
- It sums up the numbers and returns the result.

**2. tests/calculator.test.ts**

**These are the Jest tests for the add function. The tests cover various scenarios :**

- Empty string returns 0.
- Single number returns the number itself.
- Two numbers return their sum.
- Multiple numbers return their sum.
- New lines between numbers are handled correctly.
- Custom delimiters are supported.
- Negative numbers throw an exception, listing all negative numbers in the error message.

To run the tests, you can use the following command:

npx jest

## Summary

By following TDD principles, we start by writing tests for the simplest functionality and then gradually build up the functionality of the 'add' method by implementing only the code necessary to pass the tests. After each test passes, we refactor the code to improve its structure without changing its behavior.

The above code ensures that the 'add' method can handle various cases including empty strings, single numbers, multiple numbers, new lines as delimiters, custom delimiters, and negative number exceptions.
