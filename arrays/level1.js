/* Task 1

Inside the 'makeEmptyArray' function, declare and return an empty array. */

function makeEmptyArray() {
  return [];
}

/* Task 2

Inside the 'makeNumbersArray' function, declare and return an array with the numbers 0 to 5 listed as items within the array. */

function makeNumbersArray() {
  return [0, 1, 2, 3, 4, 5];
}

/* Task 3

Inside the 'makeFruitArray' function, declare and return an array containing the following strings: 'Mango', 'Kiwi', 'Papaya', 'Plum'. 
Declare the array using the array constructor method.  */

function makeFruitArray() {
  return Array('Mango', 'Kiwi', 'Papaya', 'Plum');
}

/* Task 4

The 'checkArrayLength' function takes in an array as its only argument. Inside the function, return the number that represents the
length of this array. */

function checkArrayLength(array) {}

/* Task 5

The 'makeArrayWithLength' function takes in a number as its only argument. Inside the function, return an array that is as long as the 
number, and where each item is an instance of that same number. */

function makeArrayWithLength(number) {}

/* Task 6

The 'accessFirstItem' function takes in an array as its only argument. Inside the function, return the first item in this array. */

function accessFirstItem(array) {}

/* Task 7

The 'accessLastItem' function takes in an array as its only argument. Inside the function, return the last item in this array. */

function accessLastItem(array) {}

/* Task 8

The 'accessSpecificItem' function takes in an array and an index number as its arguments. Return the item in the array from the index 
specified index. */

function accessSpecificItem(array, index) {}

/* Task 9

The 'changeArrayItem' function takes in an array, an index and a newArrayItem. Inside the function, change the array so that the item 
at the specified index is replaced with the new item. */

function changeArrayItem(array, index, newArrayItem) {}

module.exports = {
  makeEmptyArray,
  makeNumbersArray,
  makeFruitArray,
  checkArrayLength,
  makeArrayWithLength,
  accessFirstItem,
  accessLastItem,
  accessSpecificItem,
  changeArrayItem,
};
