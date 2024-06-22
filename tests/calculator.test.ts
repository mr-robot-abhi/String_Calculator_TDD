export function add(numbers: string): number {
    if (numbers === "") return 0;
    return -1; // Dummy return to compile
}
test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});
