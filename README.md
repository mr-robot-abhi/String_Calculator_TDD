#H1 # String_Calculator_TDD
Input: a string of comma-separated numbers | Output: an integer, sum of the numbers

##H2 Step 1: Setup

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
