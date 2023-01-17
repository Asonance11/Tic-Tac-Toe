const gameContainer = document.querySelector('#game-container');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart');

let player = function (name, marker) {
	return { name, marker };
};
let player1 = player('player1', 'X');
let player2 = player('player2', 'O');
