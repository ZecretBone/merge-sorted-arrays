// This function can be implemented in merge function (while loop part) but for the cleaner inspection I decided to separate it as a helper function.
function validateCollection(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): boolean {
  let indexC1 = 0,
    indexC2 = 0,
    indexC3 = 0,
    maxC1 = 0,
    minC2 = 0,
    maxC3 = 0;

  if (collection_1.length > 0) {
    maxC1 = collection_1[0];
  }
  if (collection_2.length > 0) {
    minC2 = collection_2[0];
  }
  if (collection_3.length > 0) {
    maxC3 = collection_3[0];
  }

  while (
    indexC1 < collection_1.length ||
    indexC2 < collection_2.length ||
    indexC3 < collection_3.length
  ) {
    if (indexC1 < collection_1.length) {
      if (collection_1[indexC1] < maxC1 || collection_1[indexC1] < 0) {
        console.log("c1 in");
        return false;
      }
      maxC1 = collection_1[indexC1];
      indexC1 += 1;
    }
    if (indexC2 < collection_2.length) {
      if (collection_2[indexC2] > minC2 || collection_2[indexC2] < 0) {
        return false;
      }
      minC2 = collection_2[indexC2];
      indexC2 += 1;
    }
    if (indexC3 < collection_3.length) {
      if (collection_3[indexC3] < maxC3 || collection_3[indexC3] < 0) {
        console.log("c3 in");
        return false;
      }
      maxC3 = collection_3[indexC3];
      indexC3 += 1;
    }
  }

  return true;
}

// This function can be implemented in merge function but for the cleaner inspection I decided to separate it as a helper function.
function reverseCollection(collection: number[]): number[] {
  let newCollection: number[] = [];
  let i: number = collection.length - 1;

  while (i > -1) {
    newCollection.push(collection[i]);
    i -= 1;
  }

  return newCollection;
}

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // I will assume for invalid collection scheme or invalid elements to return as empty array
  if (!validateCollection(collection_1, collection_2, collection_3)) {
    return [];
  }
  let mergedArray: number[] = [];
  let indexC1 = 0,
    indexC2 = 0,
    indexC3 = 0;

  // Since I don't know if reverse function is count as sorting function that prohibited in this assignment so if it is prohibited i will skip the next line and create new function instead
  //   collection_2 = collection_2.reverse();
  collection_2 = reverseCollection(collection_2);

  while (
    indexC1 < collection_1.length ||
    indexC2 < collection_2.length ||
    indexC3 < collection_3.length
  ) {
    let min: number = -1;

    if (
      indexC1 < collection_1.length &&
      (min === -1 || collection_1[indexC1] < min)
    ) {
      min = collection_1[indexC1];
    }
    if (
      indexC2 < collection_2.length &&
      (min === -1 || collection_2[indexC2] < min)
    ) {
      min = collection_2[indexC2];
    }
    if (
      indexC3 < collection_3.length &&
      (min === -1 || collection_3[indexC3] < min)
    ) {
      min = collection_3[indexC3];
    }

    if (indexC1 < collection_1.length && collection_1[indexC1] === min) {
      indexC1 += 1;
    } else if (indexC2 < collection_2.length && collection_2[indexC2] === min) {
      indexC2 += 1;
    } else if (indexC3 < collection_3.length && collection_3[indexC3] === min) {
      indexC3 += 1;
    }

    mergedArray.push(min!);
  }

  return mergedArray;
}
