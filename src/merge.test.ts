import { merge } from './merge';

describe('merge function', () => {
  
  it('[Case 1] should return sorted array', () => {
    const result = merge([1, 3, 5], [6, 4, 2], [2, 7, 9]);
    expect(result).toEqual([1, 2, 2, 3, 4, 5, 6, 7, 9]);
  });

  it('[Case 2] should handle empty arrays', () => {
    const result = merge([], [6, 4, 2], []);
    expect(result).toEqual([2, 4, 6]);
  });

  it('[Case 3] should handle all empty arrays', () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it('[Case 4] should handle arrays with duplicate values', () => {
    const result = merge([1, 3, 5], [4, 3, 2], [2, 7, 9]);
    expect(result).toEqual([1, 2, 2, 3, 3, 4, 5, 7, 9]);
  });

  it('[Case 5] should handle arrays of different lengths', () => {
    const result = merge([1, 3], [6, 4, 2], [2, 7, 9]);
    expect(result).toEqual([1, 2, 2, 3, 4, 6, 7, 9]);
  });

  it('[Case 6] should handle arrays with negative values', () => {
    const result = merge([-5, -3, -1], [6, 4, 2], [2, 7, 9]);
    expect(result).toEqual([-5, -3, -1, 2, 2, 4, 6, 7, 9]);
  });

  it('[Case 7] should handle c2 reversal check', () => {
    const result = merge([1, 3, 5], [6, 4, 2], [2, 7, 9]);
    expect(result).toEqual([1, 2, 2, 3, 4, 5, 6, 7, 9]);
  });

});