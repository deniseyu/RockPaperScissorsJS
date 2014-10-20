		turn = []
			
			document.getElementsByTagName('img')[0].onclick = function() { turn.push(new Rock)}
			document.getElementsByTagName('img')[1].onclick = function() { turn.push(new Paper)}
			document.getElementsByTagName('img')[2].onclick = function() { turn.push(new Scissors)}

			function displayWinner() {
				var x = document.createElement("P");
				var t = document.createTextNode(rules.versus(turn[0], turn[1]));
   				 x.appendChild(t);
   				 document.getElementById("myDiv").appendChild(x);
			}

			document.getElementsByTagName('img')[0].addEventListener("click", function() {
				if (turn.length === 2) {
				displayWinner()
				turn = [] }
			})  
			document.getElementsByTagName('img')[1].addEventListener("click", function() {
				if (turn.length === 2) {
				displayWinner()
				turn = [] }
			})
			document.getElementsByTagName('img')[2].addEventListener("click", function() {
				if (turn.length === 2) {
				displayWinner()
				turn = [] }
			})