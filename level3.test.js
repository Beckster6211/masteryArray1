const { removeTicket } = require('./level3');

function generateTickets(number) {
  let ticketArray = [];
  for (let i = 1; i <= number; i++) {
    ticketArray.push(`${i}` + `${i - 1}`);
  }
  return ticketArray;
}

describe('removeTicket function', () => {
  it('removes the correct ticket from the returned array', () => {
    let ticketArray = generateTickets(Math.round(Math.random() * 100));
    //FIXME: I wanted to cycle through the array, removing ticket after ticket until there were no tickets left. But it didn't quite work!
    for (let i = 0; i <= ticketArray.length; i++) {
      console.log({ i });
      const randomIndex = Math.floor(Math.random() * ticketArray.length);
      const expected = [ticketArray[randomIndex]];
      const actual = removeTicket(ticketArray, expected[0]);
      expect(actual).toEqual(expect.not.arrayContaining(expected));
      ticketArray = actual;
    }
  });
});
