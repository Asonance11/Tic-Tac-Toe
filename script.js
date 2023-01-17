const gameContainer = document.querySelector('#game-container');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart');

let player = function (name, marker) {
	return { name, marker };
};
let player1 = player('player1', 'X');
let player2 = player('player2', 'O');

const gameBoard = (() => {
	let board = [];
	let currentPlayer = player1.marker;

	restartButton.addEventListener('click', restart);

	function restart() {
		for (let i = 0; i < cells.length; i++) {
			cells[i].textContent = '';
		}
	}
	cells.forEach((cell) => {
		cell.addEventListener('click', () => {
			if (currentPlayer == player1.marker) {
				cell.textContent = currentPlayer;
				currentPlayer = player2.marker;
			} else {
				cell.textContent = currentPlayer;
				currentPlayer = player1.marker;
			}
		});
	});
})();
