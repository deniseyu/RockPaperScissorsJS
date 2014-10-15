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

RPS.prototype.beatsScissors = function(rock) {
	return('rock')
};

RPS.prototype.beatsPaper = function(scissors) {
	return('scissors')
};

RPS.prototype.beatsRock = function(paper) {
	return('paper')
};




