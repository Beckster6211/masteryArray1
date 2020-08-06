const { getTaskString } = require('./libs/getTaskString');
const { shuffleArray } = require('./libs/shuffleArray');

const {
  addToArrayEnd,
  addToArrayStart,
  removeFromArrayEnd,
  removeFromArrayStart,
  makeArrayString,
  mutateIndexFive,
  makeShorterArray,
} = require('./level2');

describe('addToArrayEnd function', () => {
  it('uses the push method', () => {
    const expected = 'push';
    const actual = getTaskString(addToArrayEnd);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('adds the specified item to the end of the given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const newArrayItem = Math.floor(Math.random() * 10);
    const expected = [...shuffledNumbers, newArrayItem];
    const actual = addToArrayEnd(shuffledNumbers, newArrayItem);

    expect(actual).toEqual(expected);
  });
});

describe('addToArrayStart function', () => {
  it('uses the shift method', () => {
    const expected = 'unshift';
    const actual = getTaskString(addToArrayStart);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('adds the specified item to the start of the given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const newArrayItem = Math.floor(Math.random() * 10);
    const expected = [newArrayItem, ...shuffledNumbers];
    const actual = addToArrayStart(shuffledNumbers, newArrayItem);

    expect(actual).toEqual(expected);
  });
});

describe('addToArrayStart function', () => {
  it('uses the shift method', () => {
    const expected = 'unshift';
    const actual = getTaskString(addToArrayStart);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('adds the specified item to the start of the given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const newArrayItem = Math.floor(Math.random() * 10);
    const expected = [newArrayItem, ...shuffledNumbers];
    const actual = addToArrayStart(shuffledNumbers, newArrayItem);

    expect(actual).toEqual(expected);
  });
});

describe('addToArrayStart function', () => {
  it('uses the unshift method', () => {
    const expected = 'unshift';
    const actual = getTaskString(addToArrayStart);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('adds the specified item to the start of the given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const newArrayItem = Math.floor(Math.random() * 10);
    const expected = [newArrayItem, ...shuffledNumbers];
    const actual = addToArrayStart(shuffledNumbers, newArrayItem);

    expect(actual).toEqual(expected);
  });
});

describe('removeFromArrayEnd function', () => {
  it('uses the pop method', () => {
    const expected = 'pop';
    const actual = getTaskString(removeFromArrayEnd);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('removes an item from the end of the given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = shuffledNumbers.slice(0, shuffledNumbers.length - 1);
    const actual = removeFromArrayEnd(shuffledNumbers);

    expect(actual).toEqual(expected);
  });
});

describe('removeFromArrayStart function', () => {
  it('uses the shift method', () => {
    const expected = 'shift';
    const actual = getTaskString(removeFromArrayStart);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('removes an item from the start of the given array', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = shuffledNumbers.slice(1);
    const actual = removeFromArrayStart(shuffledNumbers);

    expect(actual).toEqual(expected);
  });
});

describe('makeArrayString function', () => {
  it('returns a string', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = 'string';
    const actual = makeArrayString(shuffledNumbers);

    expect(typeof actual).toBe(expected);
  });
  it('uses the join method', () => {
    const expected = 'join';
    const actual = getTaskString(makeArrayString);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('returns a correctly formatted string list', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = shuffledNumbers.join(', ');
    const actual = makeArrayString(shuffledNumbers);
    expect(actual).toBe(expected);
  });
});

describe('mutateIndexFive function', () => {
  it('uses the splice method', () => {
    const expected = 'splice';
    const actual = getTaskString(mutateIndexFive);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('returns an array with the 5th item changed to mutate', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = 'mutate';
    const actual = mutateIndexFive(shuffledNumbers);
    expect(actual[4]).toBe(expected);
  });
});

describe('makeShorterArray function', () => {
  it('uses the slice method', () => {
    const expected = 'slice';
    const actual = getTaskString(makeShorterArray);

    expect(actual).toEqual(expect.stringContaining(expected));
  });
  it('returns an array with the 5th item changed to mutate', () => {
    const shuffledNumbers = shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const randomIndex = Math.floor(Math.random() * 10);
    const expected = shuffledNumbers.slice(randomIndex);
    const actual = makeShorterArray(shuffledNumbers, randomIndex);

    expect(actual).toEqual(expected);
  });
});
