const gameContainer = document.querySelector('#game-container');
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart');
const text = document.querySelector('#text');

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

	function checkWinner() {
		for (let i = 0; i < cells.length; i++) {
			if (cells[i].textContent !== '') {
				if (
					cells[i].textContent == cells[i + 2].textContent &&
					cells[i + 2].textContent == cells[i].textContent
				) {
					if (i == 0 || i == 3 || i == 6)
						if (cells[i].textContent == player1.marker) {
							text.textContent = `X wins`;
						} else if (cells[i].textContent == player2.marker) {
							text.textContent = `O wins`;
						}
				}
			}
		}
	}
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener('click', () => {
			if (cells[i].textContent == '')
				if (currentPlayer == player1.marker) {
					cells[i].textContent = currentPlayer;
					currentPlayer = player2.marker;
					checkWinner();
				} else {
					cells[i].textContent = currentPlayer;
					currentPlayer = player1.marker;
					checkWinner();
				}
		});
	}
})();
