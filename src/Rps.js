function RPS() {};

function Rock() {
	this.type = 'rock';
	this.message = 'Rock crushes scissors!'
};

function Paper() {
	this.type = 'paper';
	this.message = 'Paper covers rock!';
};

function Scissors() {
 	this.type = 'scissors';
 	this.message = 'Scissors cuts paper!';
 };

 function Draw() {
 	this.type = 'draw'
 	this.message = 'Draw!'
 };

 function PlayerChoice(my_type){
 	this.type = my_type
 };

RPS.prototype.versus = function(choiceOne, choiceTwo) {
 if(choiceOne.type === choiceTwo.type){
 	return (new Draw)
 }
	if((choiceOne.type === ('rock') && choiceTwo.type === ('scissors')) ||
	  (choiceOne.type === ('scissors') && choiceTwo.type === ('rock'))) 
	return (new Rock);

	if((choiceOne.type === ('paper') && choiceTwo.type === ('scissors')) ||
		(choiceOne.type === ('scissors') && choiceTwo.type === ('paper')))
	return (new Scissors);

	if((choiceOne.type === ('paper') && choiceTwo.type === ('rock')) ||
		(choiceOne.type === ('rock') && choiceTwo.type === ('paper')))
	return (new Paper);
};

RPS.prototype.RandomChoice = function() {
	var choices = [new Rock, new Paper, new Scissors]
	return choices[Math.floor(Math.random() * 3)]
};



