const { getTaskString } = require('./libs/getTaskString');
const { shuffleArray } = require('./libs/shuffleArray');

const {
  makeEmptyArray,
  makeNumbersArray,
  makeFruitArray,
  checkArrayLength,
  makeArrayWithLength,
  accessFirstItem,
  accessLastItem,
  accessSpecificItem,
  changeArrayItem,
} = require('./level1');

describe('makeEmptyArray function', () => {
  it('includes an empty array', () => {
    const expected = '[]';
    const actual = getTaskString(makeEmptyArray, 3);

    expect(actual).toEqual(expect.stringContaining(expected));
  });

  it('returns an empty array', () => {
    const expected = [];
    const actual = makeEmptyArray();

    expect(actual).toEqual(expected);
  });
});

describe('makeNumbersArray function', () => {
  it('includes an array', () => {
    const expected = /\[.*\]/g;
    const actual = getTaskString(makeNumbersArray, 3);

    expect(actual).toEqual(expect.stringMatching(expected));
  });

  it('returns an array with six items', () => {
    const expected = 6;
    const actual = makeNumbersArray();

    expect(actual).toHaveLength(expected);
  });

  it('returns an array with itemised numbers from 0 to 5', () => {
    const expected = [0, 1, 2, 3, 4, 5];
    const actual = makeNumbersArray();

    expect(actual).toEqual(expected);
  });
});

describe('makeFruitArray function', () => {
  it('includes the array constructor method', () => {
    const expected = /Array(.*)/g;
    const actual = getTaskString(makeFruitArray, 3);

    expect(actual).toEqual(expect.stringMatching(expected));
  });

  it('returns an array with string items in it', () => {
    const expected = 'string';
    const actual = makeFruitArray();
    const index = Math.floor(Math.random() * actual.length);

    expect(typeof actual[index]).toEqual(expected);
  });

  it('returns an array with the itemised strings: Mango, Kiwi, Papaya and Plum', () => {
    const expected = ['Mango', 'Kiwi', 'Papaya', 'Plum'];
    const actual = makeFruitArray();

    expect(actual).toEqual(expected);
  });
});

describe('checkArrayLength function', () => {
  it('returns the correct length of an array', () => {
    const randomLengthArray = Array(Math.round(Math.random() * 100));
    const expected = randomLengthArray.length;
    const actual = checkArrayLength(randomLengthArray);

    expect(actual).toEqual(expected);
  });
});

describe('makeArrayWithLength function', () => {
  it('returns an array with the correct length', () => {
    const expected = Math.round(Math.random() * 100);
    const actual = makeArrayWithLength(expected);

    expect(actual).toHaveLength(expected);
  });
});

describe('accessFirstItem function', () => {
  it('returns the first item in a given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = shuffledNumbers[0];
    const actual = accessFirstItem(shuffledNumbers);

    expect(actual).toBe(expected);
  });
});

describe('accessLastItem function', () => {
  it('returns the last item in a given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = shuffledNumbers[shuffledNumbers.length - 1];
    const actual = accessLastItem(shuffledNumbers);

    expect(actual).toBe(expected);
  });
});

describe('accessSpecificItem function', () => {
  it('returns the specified item in a given a array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const randomIndex = Math.floor(Math.random() * 10);
    const expected = shuffledNumbers[randomIndex];
    const actual = accessSpecificItem(shuffledNumbers, randomIndex);

    expect(actual).toBe(expected);
  });
});

describe('changeArrayItem function', () => {
  it('changes the correct item in the array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const randomIndex = Math.floor(Math.random() * 10);
    const newArrayItem = Math.floor(Math.random() * 10);
    const expected = newArrayItem;
    const actual = changeArrayItem(shuffledNumbers, randomIndex, newArrayItem);

    expect(actual[randomIndex]).toEqual(expected);
  });
  it('returns a correctly updated array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const randomIndex = Math.floor(Math.random() * 10);
    const newArrayItem = Math.floor(Math.random() * 10);
    const expected = [
      ...shuffledNumbers.slice(0, randomIndex),
      newArrayItem,
      ...shuffledNumbers.slice(randomIndex + 1),
    ];
    const actual = changeArrayItem(shuffledNumbers, randomIndex, newArrayItem);

    expect(actual).toEqual(expected);
  });
});
