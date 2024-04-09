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

function setHoverText(){
    //remove all hover text
    tiles.forEach(tile=>{
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach(tile => {
        if(tile.innerText == ""){
            tile.classList.add(hoverClass);
        }
    });
}

setHoverText();

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
        boardState[tileNumber - 1] = PLAYER_X;
        turn = PLAYER_O;
    }
    else{
        tile.innerText = PLAYER_O;
        boardState[tileNumber - 1] = PLAYER_O;
        turn = PLAYER_X;
    }

    clickSound.play();
    setHoverText();
    checkWinner();
}

const winningCombinations = [
    //rows
    {combo:[1, 2, 3], strikeClass: "strike-row-1"},
    {combo:[4, 5, 6], strikeClass: "strike-row-2"},
    {combo:[7, 8, 9], strikeClass: "strike-row-3"},
    //columns
    {combo:[1, 4, 7], strikeClass: "strike-column-1"},
    {combo:[2, 5, 8], strikeClass: "strike-column-2"},
    {combo:[3, 6, 9], strikeClass: "strike-column-3"},
    //diagonals
    {combo:[1, 5, 9], strikeClass: "strike-diagonal-1"},
    {combo:[3, 5, 7], strikeClass: "strike-diagonal-2"},
]

