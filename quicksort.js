function quicksort(array = [], lowIndex = 0, highIndex = 0) {
  if (lowIndex >= highIndex) {
    return;
  }

  const pivot = array[highIndex];
  let leftPointer = lowIndex;
  let rightPoiner = highIndex;
  while (leftPointer < rightPoiner) {
    while (array[leftPointer] <= pivot && leftPointer < rightPoiner) {
      leftPointer++;
    }

    while (array[rightPoiner] >= pivot && leftPointer < rightPoiner) {
      rightPoiner--;
    }

    swap(array, leftPointer, rightPoiner);
  }

  swap(array, leftPointer, highIndex);

  quicksort(array, lowIndex, leftPointer - 1);
  quicksort(array, leftPointer + 1, highIndex);
  return array;
}

function swap(array = [], index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

let array = [5, 2, 5, 1, 7, 8, 9, 10, 56, 34];
console.log(quicksort(array, 0, array.length - 1));
