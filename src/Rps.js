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

RPS.prototype.versus = function(choiceOne, choiceTwo) {
 if(choiceOne.type === choiceTwo.type){
 	return new Draw;
 }
	if((choiceOne.type === ('rock') && choiceTwo.type === ('scissors')) ||
	  (choiceOne.type === ('scissors') && choiceTwo.type === ('rock'))) 
	return ('rock');

	if((choiceOne.type === ('paper') && choiceTwo.type === ('scissors')) ||
		(choiceOne.type === ('scissors') && choiceTwo.type === ('paper')))
	return ('scissors');

	if((choiceOne.type === ('paper') && choiceTwo.type === ('rock')) ||
		(choiceOne.type === ('rock') && choiceTwo.type === ('paper')))
	return ('paper');
};






