const { getTaskString } = require('./libs/getTaskString');

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
