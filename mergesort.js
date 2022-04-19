function mergesort(array = []) {
  const inputLength = array.length;
  if (inputLength < 2) {
    return;
  }

  const midIndex = Math.floor(inputLength / 2);

  const leftHalf = array.slice(0, midIndex);
  const rigthHalf = array.slice(midIndex, inputLength);

  //   console.log(leftHalf);
  //   console.log(rigthHalf);
  mergesort(leftHalf);
  mergesort(rigthHalf);

  merge(array, leftHalf, rigthHalf);
  return array;
}

function merge(array = [], leftHalf = [], rigthHalf = []) {
  const leftHalfSize = leftHalf.length;
  const rigthHalfSize = rigthHalf.length;

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftHalfSize && j < rigthHalfSize) {
    if (leftHalf[i] <= rigthHalf[j]) {
      array[k] = leftHalf[i];
      i++;
    } else {
      array[k] = rigthHalf[j];
      j++;
    }
    k++;
  }

  while (i < leftHalfSize) {
    array[k] = leftHalf[i];
    i++;
    k++;
  }

  while (j < rigthHalfSize) {
    array[k] = rigthHalf[j];
    j++;
    k++;
  }
}
const array = [4, 5, 6, 7, 1, 2, 3, 78, 9];
console.log(array);
console.log(mergesort(array));
