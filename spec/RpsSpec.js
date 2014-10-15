describe('Rock Paper Scissors', function() {

	rps = new RPS;
	rock = new Rock;
	scissors = new Scissors;
	paper = new Paper;
	
	describe('Gestures of the game are', function() {

		it('"rock"', function() {
		rock = new Rock;
		expect(rock.type).toEqual('rock');
		});

		it('"paper"', function() {
		paper = new Paper;
		expect(paper.type).toEqual('paper');
		});

		it('"scissors"', function() {
		scissors = new Scissors;
		expect(scissors.type).toEqual('scissors');	
		});

	});

	describe('The rules', function() {

		it('rock beat scissors', function() {
		expect(rps.beatsScissors(rock)).toEqual('rock');
		});

		it('scissors beat paper', function() {
		expect(rps.beatsPaper(scissors)).toEqual('scissors');
		});

		it('paper beats rock', function() {
			expect(rps.beatsRock(paper)).toEqual('paper');
		});

	});

});