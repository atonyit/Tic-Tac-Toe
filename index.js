const tiles = document.querySelectorAll(".tile");
const PLAYER_X = 'X';
const PLAYER_O = 'O';

let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById('strike');
const gameOverArea = document.getElementById('game-over-area');
const gameOverText = document.getElementById('game-over-text');
const playAgain = document.getElementById('play-again');

const gameOverSound = new Audio(".vscode/sounds/game_over.wav");
const clickSound = new Audio(".vscode/sounds/click.wav");

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function tileClick(event){
    if(gameOverArea.classList.contains('visible')){
        return;
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != ""){
        return;
    }

    if(turn === PLAYER_X){
        tile.innerText = PLAYER_X;
        boardState[tileNumber - 1]
    }
}

