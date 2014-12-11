function RPS() {
	var playerChoice;
	var computerChoice;
};

function Rock() {
	this.type = 'rock';
};

function Paper() {
	this.type = 'paper';
};

function Scissors() {
 	this.type = 'scissors';
 };

 function Lizard(){
 	this.type = 'lizard';
 };

 function Spock(){
 	this.type = 'spock';
 };

 function Draw() {
 	this.type = 'draw';
 };

RPS.prototype.versus = function(choiceOne, choiceTwo) {
	playerChoice = choiceOne;
	computerChoice = choiceTwo;
 if(choiceOne.type === choiceTwo.type){
 	return (new Draw);
 }
	if (	((choiceOne.type === 'rock')	&& ((choiceTwo.type === 'scissors') || (choiceTwo.type === 'lizard'))) ||
			((choiceOne.type === 'scissors')&& ((choiceTwo.type === 'paper') || (choiceTwo.type === 'lizard'))) ||
			((choiceOne.type === 'paper') 	&& ((choiceTwo.type === 'rock') || (choiceTwo.type === 'spock'))) ||
			((choiceOne.type === 'lizard') 	&& ((choiceTwo.type === 'spock') || (choiceTwo.type === 'paper'))) ||
			((choiceOne.type === 'spock') 	&& ((choiceTwo.type === 'scissors') || (choiceTwo.type === 'rock')))	)		
				 {
		return playerChoice;
	}
	else {
		return computerChoice;
	}
};

RPS.prototype.outcomeMessage = function(winningChoice){
	if (winningChoice.type === 'draw') {
		return "Draw!";
	} 
	if (winningChoice === playerChoice) {
		return "You win!";
	} 
	else {
		return "Computer wins!";
	}
};

RPS.prototype.RandomChoice = function() {
	var choices = [new Rock, new Paper, new Scissors, new Lizard, new Spock]
	return choices[Math.floor(Math.random() * 5)]
};

RPS.prototype.createObject = function(choiceAsString) {
	if (choiceAsString === 'Rock') {
		return new Rock;
	}
	if (choiceAsString === 'Scissors') {
		return new Scissors;
	}
	if (choiceAsString === 'Paper') {
		return new Paper;
	}
	if (choiceAsString === 'Lizard') {
		return new Lizard;
	}
	if (choiceAsString === 'Spock') {
		return new Spock;
	}
};