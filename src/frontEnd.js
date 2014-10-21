$(document).ready(function(){
	var rps = new RPS;
	var rock = new Rock;
	var paper = new Paper;
	var spock = new Spock;
	var lizard = new Lizard;
	var draw = new Draw;

	$('h1.rock').mouseover(function(){
		$('h2').addClass('fadein');
		$('h2').text('rock smashes scissors | rock crushes lizard');
	});

	$('h1.paper').mouseover(function(){
		$('h2').addClass('fadein');
		$('h2').text('paper covers rock | paper disproves spock')
	});

	$('h1.scissors').mouseover(function(){
		$('h2').addClass('fadein');
		$('h2').text('scissors cuts paper | scissors decapitates lizard')
	});

	$('h1.lizard').mouseover(function(){
		$('h2').addClass('fadein');
		$('h2').text('lizard eats paper | lizard poisons spock')
	})

	$('h1.spock').mouseover(function(){
		$('h2').addClass('fadein');
		$('h2').text('spock smashes scissors | spock vaporizes rock')
	});

	$('img.choice').on('click', function(){
		var rps = new RPS;
		var playerchoice = new PlayerChoice($(this).data('pick'))
		var computerchoice = rps.RandomChoice();

		$('#players_choices').text('You chose ' + (playerchoice.type) + '! Computer chose ' + (computerchoice.type) + '!');
		$('#outcome').text('Result: ' + (rps.versus(playerchoice, computerchoice).message));
	
	});

});
