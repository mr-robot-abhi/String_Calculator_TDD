import { add } from '../src/calculator';
// Test: Add Method Handles Empty String:
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});
//Test: Add Method Handles Single Number:
test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});
//Test: Add Method Handles Two Numbers:
test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
});
//Test: Add Method Handles Multiple Numbers:
test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});
//Test: Handle New Lines Between Numbers:
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});
//Test: Support Different Delimiters:
test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

//Test: Throw Exception for Negative Numbers:
test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test('should throw an exception listing all negative numbers', () => {
    expect(() => add("1,-2,-3,4")).toThrow("Negative numbers not allowed: -2,-3");
});
