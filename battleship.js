var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	// prompts save values as strings
	guess = prompt('Please enter a number from 0-6:');
	guess = parseInt(guess);
	if (guess > 6 || guess < 0 || Number.isInteger(guess) != true) {
		prompt('The value you entered is not valid. Please enter a number from 0-6:');
	} else {
		guesses += 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert('Hit!');
			hits += 1;
			if (hits == 3) {
				isSunk = true;
				alert('You sank my battleship!');
			}
		} else {
			alert('Miss!');
		}
	}
}
var message = "You took " + guesses + " guesses to sink my battleship.";
alert(message);