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

module.exports = { removeTicket };
