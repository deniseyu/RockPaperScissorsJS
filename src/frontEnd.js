$(document).ready(function(){
	var rps = new RPS;
	var rock = new Rock;
	var paper = new Paper;
	var draw = new Draw;

	$('img.choice').on('click', function(){
		var rps = new RPS;
		var playerchoice = new PlayerChoice($(this).data('pick'))
		var computerchoice = rps.RandomChoice();

		$('#player_choice').text('You chose ' + (playerchoice.type));
		$('#computer_choice').text('Computer chose ' + (computerchoice.type));
		$('#outcome').text('Result: ' + (rps.versus(playerchoice, computerchoice).message));
	
	});

});
