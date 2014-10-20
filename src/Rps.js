function RPS() {};

function Rock() {
	this.type = 'rock';
};

function Paper() {
	this.type = 'paper';
};

function Scissors() {
 	this.type = 'scissors';
 };

 function Draw() {};

 rules = new RPS;

RPS.prototype.versus = function(choiceOne, choiceTwo) {
 if(choiceOne.type === choiceTwo.type){
 	return ("It's a draw")
 }
	if((choiceOne.type === ('rock') && choiceTwo.type === ('scissors')) ||
	  (choiceOne.type === ('scissors') && choiceTwo.type === ('rock'))) 
	return ('Rock wins');

	if((choiceOne.type === ('paper') && choiceTwo.type === ('scissors')) ||
		(choiceOne.type === ('scissors') && choiceTwo.type === ('paper')))
	return ('Scissors wins');

	if((choiceOne.type === ('paper') && choiceTwo.type === ('rock')) ||
		(choiceOne.type === ('rock') && choiceTwo.type === ('paper')))
	return ('Paper wins');
};






