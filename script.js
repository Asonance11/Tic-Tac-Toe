const gameContainer = document.querySelector('#game-container');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart');

let player = function (name, marker) {
	return { name, marker };
};
