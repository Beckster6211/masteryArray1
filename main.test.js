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
  addToArrayEnd,
  addToArrayStart,
  removeFromArrayEnd,
  removeFromArrayStart,
  makeArrayString,
  mutateIndexFive,
  makeShorterArray,
  removeTicket,
} = require('./main.js');

const LEVELS = {
  one: 'level_one',
  two: 'level_two',
  three: 'level_three',
};

describe(LEVELS.one, () => {
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
      const actual = changeArrayItem(
        shuffledNumbers,
        randomIndex,
        newArrayItem
      );

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
      const actual = changeArrayItem(
        shuffledNumbers,
        randomIndex,
        newArrayItem
      );

      expect(actual).toEqual(expected);
    });
  });
});
describe(LEVELS.two, () => {
  describe('addToArrayEnd function', () => {
    it('uses the push method', () => {
      const expected = 'push';
      const actual = getTaskString(addToArrayEnd, 3);

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
      const actual = getTaskString(addToArrayStart, 3);

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
      const actual = getTaskString(addToArrayStart, 3);

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
      const actual = getTaskString(addToArrayStart, 3);

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
      const actual = getTaskString(removeFromArrayEnd, 3);

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
      const actual = getTaskString(removeFromArrayStart, 3);

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
      const actual = getTaskString(makeArrayString, 3);

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
      const actual = getTaskString(mutateIndexFive, 3);

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
      const actual = getTaskString(makeShorterArray, 3);

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
});
describe(LEVELS.three, () => {
  describe('removeTicket function', () => {
    it('removes the correct ticket from the returned array', () => {
      let ticketArray = [
        '4039',
        '4140',
        '4241',
        '4342',
        '4443',
        '4544',
        '4645',
        '4746',
        '4847',
        '4948',
        '5049',
        '5150',
        '5251',
        '5352',
        '5453',
        '5554',
        '5655',
        '5756',
        '5857',
        '5958',
        '6059',
        '6160',
        '6261',
        '6362',
        '6463',
        '6564',
        '6665',
        '6766',
        '6867',
        '6968',
        '7069',
        '7170',
        '7271',
        '7372',
        '7473',
        '7574',
        '7675',
        '7776',
        '7877',
        '7978',
        '8079',
        '8180',
        '8281',
      ];
      for (let i = 0; i <= ticketArray.length; i++) {
        const ticketIndex = i;
        const expected = [ticketArray[ticketIndex]];
        const actual = removeTicket(ticketArray, expected[0]);
        expect(actual).toEqual(expect.not.arrayContaining(expected));
        ticketArray = actual;
      }
    });
  });
});
