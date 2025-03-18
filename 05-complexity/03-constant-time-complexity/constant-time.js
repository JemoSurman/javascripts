/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function accessElement(arr, index) {
  return arr[index];
}

const arr1 = [1,2,3];
console.log(arr1, 2);