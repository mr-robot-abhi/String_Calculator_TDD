export function add(numbers: string): number {
    if (numbers === "") return 0; // Implementation: Add Method for Empty String:

    //Implementation: Support Different Delimiters:
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const nums = numbers.split(delimiter).map(n => parseInt(n, 10));

    //Implementation: Handle Negative Numbers:
    const negativeNums = nums.filter(n => n < 0);
    if (negativeNums.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNums.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}
