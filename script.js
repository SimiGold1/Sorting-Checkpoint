//Each time work only with the first i-1 element from of the array
// Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

function insertionSort(arr) {
    // Traverse the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // Current element to be inserted into the sorted sequence
      let j = i - 1; // Index of the last element in the sorted sequence
  
      // Move elements of the sorted sequence that are greater than the current element to the right
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; // Shift the element to the right
        j--;
      }
  
      arr[j + 1] = current; // Insert the current element into the correct position
    }
  
    return arr;
  }
  
  // usage
  let array = [7, 2, 4, 1, 5, 3];
  let sortedArray = insertionSort(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 7]