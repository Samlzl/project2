//Create arrays for different card states (All Cards, Open Cards, Matched Cards)
const cards = Array.from(document.getElementsByClassName('card'));

const openCards = Array.from(document.getElementsByClassName('open show'));

const matchedCards = Array.from(document.getElementsByClassName('match'));


//Loop through all cards and select the card clicked
cards.forEach(function (el) {
  el.addEventListener('click', clickFunction(el);
}
  /*
  ---clickFunction---
  //if
  /*
  *card is already open - display card is already open and return
  */
  //else if
  /*
  *card is already matched - display card is already matched and return
  */
  //else if
  /*
  *openCards.length is 0 - run _openCard function and return
  */
  //else if
  /*
  *openCards.length is 1 - run -openCard function, run _compareCard function and return
  */
  /*
  --- _openCard Function---
  *run _counter function
  *add class 'open show' to element
  ***** function(el) {
  ***** el.classList.add('open', 'show');
  */
  /*
  --- _compareCard Function---
  *run _counter function
  *get the two elements inside openCards array and compare (===)
  *   if true run _matchClass function
  *     check to see if matchedCards is === 16
  *        if true game over + restart function
  *   if false
  *     run _removeClass function
  */
  /*
  --- _removeClass function---
  *for both elements of array openCards - remove class 'open show'
  */
  /*
  --- _matchClass function---
  *for both elements of array openCards - remove class 'open show' add class 'match'
  */
  /*
  --- _gameOver function---
  *run _modal function
  *run _restart function
  */
  /*
  --- _restart function---
  *--set element with class number to 0
  *--loop through array cards and get all elements with class 'open show'
  *and all elements with class 'match' and then remove the class 'open show'
  *and 'match' from them.
  *--run suffle function on cards array
  */
  /*
  --- _counter function---
  *get element with class 'counter'
  *add =+ 1 to the number being displayed
  *update the element to show new number
/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
