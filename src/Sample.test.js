function sum(a, b) {
  return a + b;
}

describe('Sample Test', () => {
  it('should return 3 as the result of the function', () => {
    expect(sum(1, 2)).toBe(3);
  });
});