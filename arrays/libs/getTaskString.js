// The getStudentStringData function removes any words the student did not write themselves before the task.

function getTaskString(task, startSlice) {
  // Turns the entire task function into a string.
  const taskString = task.toString();

  // Turns the taskString into an array, with each item an array of words.
  const taskStringWords = taskString.split(' ');

  // Slices out the portion of the task that are the students own words.
  const studentStringWords = taskStringWords.slice(
    startSlice,
    taskStringWords.length
  );

  // Joins the students words back together into a single string.
  const studentString = studentStringWords.join(' ');
  return studentString;
}

module.exports = { getTaskString };
