/* Task 10

The 'addToArrayEnd' function takes in an array and a newArrayItem as its arguments. Inside the function, add the new item to the end of
the array using an array method. The array method should mutate the original array. Return the updated array. */

function addToArrayEnd(array, newArrayItem) {
  array.push(newArrayItem);
  return array;
}

/* Task 11

The 'addToArrayStart' function takes in an array and a newArrayItem as its arguments. Inside the function, add the new item to the 
start of the array using an array method. The array method should mutate the original array. Return the updated array. */

function addToArrayStart(array, newArrayItem) {
  array.unshift(newArrayItem);
  return array;
}

/* Task 12

The 'removeFromArrayEnd' function takes in an array as its only argument. Inside the function, remove the item from the end of the 
array using an array method. The array method should mutate the original array. Return the updated array. */

function removeFromArrayEnd(array) {
  array.pop();
  return array;
}

/* Task 13

The 'removeFromArrayStart' function takes in an array as its only argument. Inside the function, remove the item from the start of the 
array using an array method. The array method should mutate the original array. Return the updated array. */

function removeFromArrayStart(array) {
  array.shift();
  return array;
}

/* Task 14

The 'makeArrayString' function takes in an array of string data as its only argument. Inside the function, return the contents of the 
array as a human readable string list, separated by commas, using an array method. For example, ['hoover', 'mop', 'dustpan'] would 
become 'hoover, mop, dustpan'.  */

function makeArrayString(array) {
  return array.join(', ');
}

/* Task 15

The 'mutateIndexFive' function takes in an array that contains five or more items. Inside the function, change the fifth item in the 
array to the string 'mutate' using an array method. For example, ['cumin', 'corriander', 'paprika', 'garam masala', 'tumeric', 'bay 
leaves'] would become ['cumin', 'corriander', 'paprika', 'garam masala', 'mutate', 'bay leaves']. Return the mutated array. */

function mutateIndexFive(array) {
  array.splice(4, 1, 'mutate');
  return array;
}

/* Task 16

The 'makeShorterArray' function takes in an array and a number as its arguments. Inside the function, return a copy of the array with 
the specified number of items removed from the beginning using an array method. The number will never be greater than the number of 
items in the array. For example, if the given array was [10, 5, 18, 80, 54], and the given number was 3, the function would 
return [80, 54]. */

function makeShorterArray(array, number) {
  return array.slice(number);
}

module.exports = {
  addToArrayEnd,
  addToArrayStart,
  removeFromArrayEnd,
  removeFromArrayStart,
  makeArrayString,
  mutateIndexFive,
  makeShorterArray,
};
