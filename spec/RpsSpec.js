describe('Rock Paper Scissors', function() {

	var rps = new RPS();
	var rock = new Rock();
	var scissors = new Scissors();
	var paper = new Paper();
	var lizard = new Lizard();
	var spock = new Spock();
	
	describe('Game gestures should have corresponding types', function() {

		it('rock', function() {
		expect(rock.type).toEqual('rock');
		});

		it('paper', function() {
		expect(paper.type).toEqual('paper');
		});

		it('scissors', function() {
		expect(scissors.type).toEqual('scissors');	
		});

		it('spock', function(){
			expect(spock.type).toEqual('spock');
		});

		it('lizard', function(){
			expect(lizard.type).toEqual('lizard');
		});

	});

	describe('The rules of the game should contain:', function() {

		it('return a draw when weapons match', function() {
			draw = new Draw();
			expect(rps.versus(rock, rock)).toEqual(draw);
		});

		it('rock smashes scissors', function() {
		  expect(rps.versus(rock, scissors)).toEqual(jasmine.any(Rock));
	 	});

	 	it('rock crushes lizard', function(){
	 		expect(rps.versus(rock, lizard)).toEqual(jasmine.any(Rock));
	 	});

		it('scissors cuts paper', function() {
			expect(rps.versus(paper, scissors)).toEqual(jasmine.any(Scissors));
		});

		it('scissors decapitates lizard', function(){
			expect(rps.versus(scissors, lizard)).toEqual(jasmine.any(Scissors));
		});

		it('paper covers rock', function() {
			expect(rps.versus(paper, rock)).toEqual(jasmine.any(Paper));
		});

		it('paper disproves spock', function(){
			expect(rps.versus(paper, spock)).toEqual(jasmine.any(Paper));
		});

		it('lizard poisons spock', function(){
			expect(rps.versus(lizard, spock)).toEqual(jasmine.any(Lizard));
		});

		it('lizard eats paper', function(){
			expect(rps.versus(lizard, paper)).toEqual(jasmine.any(Lizard));
		});

		it('spock vaporizes rock', function(){
			expect(rps.versus(spock, rock)).toEqual(jasmine.any(Spock));
		});

		it('spock smashes scissors', function(){
			expect(rps.versus(spock, scissors)).toEqual(jasmine.any(Spock));
		});

	});

	describe('Outcome messages', function(){

		it('when a draw occurs', function(){
			expect(rps.outcomeMessage(rps.versus(rock, rock))).toEqual('Draw!');
		});

		it('when the player wins', function(){
			expect(rps.outcomeMessage(rps.versus(rock, scissors))).toEqual('You win!');
		});

		it('when the computer wins', function(){
			expect(rps.outcomeMessage(rps.versus(rock, paper))).toEqual('Computer wins!');
		});

	});

	describe('Creating an object for the game when sending a string from the frontend', function(){

		it('a player picks rock', function(){
			expect(rps.createObject('Rock')).toEqual(jasmine.any(Rock));
		});

		it('a player picks scissors', function(){
			expect(rps.createObject('Scissors')).toEqual(jasmine.any(Scissors));
		});

		it('a player picks paper', function(){
			expect(rps.createObject('Paper')).toEqual(jasmine.any(Paper));
		});

		it('a player picks spock', function(){
			expect(rps.createObject('Spock')).toEqual(jasmine.any(Spock));
		});

		it('a player picks lizard', function(){
			expect(rps.createObject('Lizard')).toEqual(jasmine.any(Lizard));
		});

	});

});