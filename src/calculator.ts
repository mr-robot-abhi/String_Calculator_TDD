export function add(numbers: string): number {
    if (numbers === "") return 0; // Implementation: Add Method for Empty String:
    if (!numbers.includes(",")) return parseInt(numbers, 10); //Implementation: Add Method for Single Number:
    
    const nums = numbers.split(",").map(n => parseInt(n, 10)); //Implementation: Add Method for Two Numbers:
    return nums.reduce((sum, num) => sum + num, 0);
    return -1; // Dummy return to compile
}
