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

function checkArrayLength(array) {
  return array.length;
}

/* Task 5
  
  The 'makeArrayWithLength' function takes in a number as its only argument. Inside the function, return an array that is as long as the 
  number, but where each item in the array is undefined. */

function makeArrayWithLength(number) {
  return Array(number);
}

/* Task 6
  
  The 'accessFirstItem' function takes in an array as its only argument. Inside the function, return the first item in this array. */

function accessFirstItem(array) {
  return array[0];
}

/* Task 7
  
  The 'accessLastItem' function takes in an array as its only argument. Inside the function, return the last item in this array. */

function accessLastItem(array) {
  return array[[array.length - 1]];
}

/* Task 8
  
  The 'accessSpecificItem' function takes in an array and an index number as its arguments. Return the item in the array from the index 
  specified index. */

function accessSpecificItem(array, index) {
  return array[index];
}

/* Task 9
  
  The 'changeArrayItem' function takes in an array, an index and a newArrayItem. Inside the function, change the array so that the item 
  at the specified index is replaced with the new item, and return the updated array. */

function changeArrayItem(array, index, newArrayItem) {
  const updatedArray = array;
  updatedArray[index] = newArrayItem;
  return updatedArray;
}

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

/* Task 17

You have been tasked with running the community Christmas raffle. Last year there was outrage when the same ticket was pulled multiple 
times, causing local residents to come to blows after one individual claimed multiple prizes with a single ticket. Organisers are 
adamant that this should not happen again. The 'removeTicket' function takes in an array of ticket numbers, and the number ticket that 
has been drawn. Inside the function, remove that number ticket from the array of ticket numbers so that it cannot be drawn again. Return
the updated array of tickets. You may mutate the array. */

function removeTicket(ticketArray, numberDrawn) {
  const ticketIndex = ticketArray.findIndex((ticket) => ticket === numberDrawn);
  ticketArray.splice(ticketIndex, 1);
  return ticketArray;
}

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
  addToArrayEnd,
  addToArrayStart,
  removeFromArrayEnd,
  removeFromArrayStart,
  makeArrayString,
  mutateIndexFive,
  makeShorterArray,
  removeTicket,
};
