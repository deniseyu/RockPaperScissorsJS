function RPS() {};

function Rock() {
	this.type = 'rock';
	this.message = 'Computer wins!'
};

function Paper() {
	this.type = 'paper';
	this.message = 'Computer wins!';
};

function Scissors() {
 	this.type = 'scissors';
 	this.message = 'Computer wins!';
 };

 function Lizard(){
 	this.type = 'lizard';
 	this.message = 'Computer wins!';
 };

 function Spock(){
 	this.type = 'spock';
 	this.message = 'Computer wins!';
 };

 function Draw() {
 	this.type = 'draw';
 	this.message = 'Draw!';
 };

 function PlayerChoice(my_type){
 	this.type = my_type;
 	this.message = 'You win!'
 };

RPS.prototype.versus = function(choiceOne, choiceTwo) {
 if(choiceOne.type === choiceTwo.type){
 	return (new Draw);
 }
	if (	((choiceOne.type === 'rock')	&& ((choiceTwo.type === 'scissors') || (choiceTwo.type === 'lizard'))) ||
			((choiceOne.type === 'scissors')&& ((choiceTwo.type === 'paper') || (choiceTwo.type === 'lizard'))) ||
			((choiceOne.type === 'paper') 	&& ((choiceTwo.type === 'rock') || (choiceTwo.type === 'spock'))) ||
			((choiceOne.type === 'lizard') 	&& ((choiceTwo.type === 'spock') || (choiceTwo.type === 'paper'))) ||
			((choiceOne.type === 'spock') 	&& ((choiceTwo.type === 'scissors') || (choiceTwo.type === 'rock')))	)		
				 {
		return choiceOne;
	}
	else {
		return choiceTwo;
	}
};

RPS.prototype.RandomChoice = function() {
	var choices = [new Rock, new Paper, new Scissors, new Lizard, new Spock]
	return choices[Math.floor(Math.random() * 5)]
};



