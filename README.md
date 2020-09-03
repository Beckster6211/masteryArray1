# tasks_js_arrays

## Mastery tasks that demonstrate an understanding of arrays: declaring/constructing an array; manipulating arrays; and using basic array methods.

# Plan

## Level 1 - Basic Syntax

Basic array syntax checklist:

- Declare an array
- Declare an array with contents
- Declare an array using the 'new Array' syntax
- Check the length of an array
- Make an array witha specified length
- Access a specific item in the array (first and last)
- Changing elements in an array

### Task 1

Inside the 'makeEmptyArray' function, declare and return an empty array.

function makeEmptyArray() {

}

### Task 2

Inside the 'makeNumbersArray' function, declare and return an array with the numbers 0 to 5 listed as items within the array.

function makeNumbersArray() {

}

### Task 3

Inside the 'makeFruitArray' function, declare and return an array containing the following strings: 'Mango', 'Kiwi', 'Papaya', 'Plum'. Declare the array using the array constructor method.

function makeFruitArray() {

}

### Task 4

The 'checkArrayLength' function takes in an array as its only argument. Inside the function, return the number that represents the length of this array.

function checkArrayLength(array) {

}

### Task 5

The 'makeArrayWithLength' function takes in a number as its only argument. Inside the function, return an array that is as long as the number, and where each item is an instance of that same number.

function makeArrayWithLength(number) {

}

### Task 6

The 'accessFirstItem' function takes in an array as its only argument. Inside the function, return the first item in this array.

function accessFirstItem(array) {

}

### Task 7

The 'accessLastItem' function takes in an array as its only argument. Inside the function, return the last item in this array.

function accessLastItem(array) {

}

### Task 8

The 'accessSpecificItem' function takes in an array and an index number as its arguments. Return the item in the array from the index specified index.

function 'accessSpecificItem'(array, index) {

}

### Task 9

The 'changeArrayItem' function takes in an array, an index and a newArrayItem. Inside the function, change the array so that the item at the specified index is replaced with the new item.

function changeArrayItem(array, index, newArrayItem) {

}

## Level 2 - More Complexity

Most array complexity checklist:

- Pop or shift an item on to the end or start of an array
- Push or unshift an item on to the end or start of an array
- Turn an array into a string
- Merge two arrays together
- Splice out part of an array
- Slice out part of an array

### Task 10

The 'addToArrayEnd' function takes in an array and a newArrayItem as its arguments. Inside the function, add the new item to the end of the array using an array method. The array method should mutate the original array.

function addToArrayEnd(array, newArrayItem) {

}

### Task 11

The 'addToArrayStart' function takes in an array and a newArrayItem as its arguments. Inside the function, add the new item to the start of the array using an array method. The array method should mutate the original array.

function addToArrayStart(array, newArrayItem) {

}

### Task 12

The 'removeFromArrayEnd' function takes in an array as its only argument. Inside the function, remove the item from the end of the array using an array method. The array method should mutate the original array.

function removeFromArrayEnd(array) {

}

### Task 13

The 'removeFromArrayStart' function takes in an array as its only argument. Inside the function, remove the item from the start of the array using an array method. The array method should mutate the original array.

function removeFromArrayStart(array) {

}

### Task 14

The 'makeArrayString' function takes in an array of string data as its only argument. Inside the function, return the contents of the array as a human readable string list, separated by commas, using an array method. For example, ['hoover', 'mop', 'dustpan'] would become 'hoover, mop, dustpan'.

function makeArrayString(array) {

}

### Task 15

The 'mutateIndexFive' function takes in an array that contains five or more items. Inside the function, change the fifth item in the array to the string 'mutate' using an array method. For example, ['cumin', 'corriander', 'paprika', 'garam masala', 'tumeric', 'bay leaves'] would become ['cumin', 'corriander', 'paprika', 'garam masala', 'mutate', 'bay leaves']

function mutateIndexFive() {

}

### Task 16

The 'makeShorterArray' function takes in an array and a number as its arguments. Inside the function, return a copy of the array with the specified number of items removed from the beginning using an array method. For example, if the given array was [10, 5, 18, 80, 54], and the given number was 3, the function would return [80, 54].

function makeShorterArray(array, number) {

}

## Level 3 - Real Problem

### Task 17

You have been tasked with running the community Christmas raffle. Last year there was outrage when the same ticket was pulled multiple times, causing local residents to come to blows after one individual claimed multiple prizes with a single ticket. Organisers are adamant that this should not happen again. The 'removeTicket' function takes in an array of ticket numbers, and the number ticket that has been drawn. Inside the function, remove that number ticket from the array of ticket numbers so that it cannot be drawn again.

function removeTicket(ticketArray, numberDrawn) {

}
