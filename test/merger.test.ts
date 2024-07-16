import { merge } from "../src/merger";

describe("merge", () => {
  it("arrays can be merged and sorted correctly", () => {
    const collection_1 = [4, 9, 10];
    const collection_2 = [7, 6, 1];
    const collection_3 = [0, 2];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 4, 6, 7, 9, 10]);
  });

  it("arrays merger can handle arrays with one element each", () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [4];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 4]);
  });

  it("arrays merger can handle empty arrays", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [5];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([5]);
  });

  it("arrays merger can handle duplicate elements", () => {
    const collection_1: number[] = [4, 6, 7];
    const collection_2: number[] = [5, 4];
    const collection_3: number[] = [5, 5, 6];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([4, 4, 5, 5, 5, 6, 6, 7]);
  });

  // I will assume for invalid collection scheme or invalid elements to return as empty array
  it("arrays merger can handle arrays with invalid elements", () => {
    const collection_1: number[] = [5, 9];
    const collection_2: number[] = [3, -2, 1];
    const collection_3: number[] = [4, 8];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  // I will assume for invalid collection scheme or invalid elements to return as empty array
  it("arrays merger can handle arrays with invalid ascending collection scheme", () => {
    const collection_1: number[] = [4, 5];
    const collection_2: number[] = [2, 1];
    const collection_3: number[] = [6, 3];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  // I will assume for invalid collection scheme or invalid elements to return as empty array
  it("arrays merger can handle arrays with invalid descending collection scheme", () => {
    const collection_1: number[] = [4, 5];
    const collection_2: number[] = [2, 3];
    const collection_3: number[] = [6, 7];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });
});
