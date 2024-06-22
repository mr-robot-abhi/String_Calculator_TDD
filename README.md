# String_Calculator_TDD
Input: a string of comma-separated numbers | Output: an integer, sum of the numbers

Step 1: Setup

***Initialize a TypeScript Project:**

npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init

***Setup Testing Framework:**
Install Jest for testing.

npm install jest ts-jest @types/jest --save-dev
npx ts-jest config:init

***Create Project Structure:**
|--src
|    |--calculator.ts
|--tests
     |--calculator.test.ts
