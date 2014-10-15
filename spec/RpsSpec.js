describe('Rock Paper Scissors', function() {

	rps = new RPS;
	rock = new Rock;
	scissors = new Scissors;
	paper = new Paper;
	
	describe('Gestures of the game are', function() {

		it('"rock"', function() {
		expect(rock.type).toEqual('rock');
		});

		it('"paper"', function() {
		expect(paper.type).toEqual('paper');
		});

		it('"scissors"', function() {
		expect(scissors.type).toEqual('scissors');	
		});

	});

	describe('The rules', function() {

		it('return a draw when weapons match', function() {
			draw = new Draw;
			expect(rps.versus(rock, rock)).toEqual(draw);
		});

		it('rock beats scissors', function() {
		  expect(rps.versus(rock, scissors)).toEqual('rock');
	 	});

		it('scissors beats paper', function() {
			expect(rps.versus(paper, scissors)).toEqual('scissors');
		});

		it('paper beats rock', function() {
			expect(rps.versus(paper, rock)).toEqual('paper');
		});

	});

});