
let board = [];
let game = document.getElementById("game");
let player = "X";
let button = document.getElementById("button");
const header = document.getElementById("header");

let contX = 0;
let contY = 0;


const playerTurn = document.createElement("span")
playerTurn.classList.add("player-turn")
game.appendChild(playerTurn);

const gameScore = document.getElementById("game-score")


const winPatterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const playerX = document.createElement("div")
playerX.classList.add("score");
gameScore.appendChild(playerX);
const imagenX = document.createElement("img");
imagenX.classList.add("img-score")
imagenX.src = "Img/x.png";

playerX.appendChild(imagenX);



const playerY = document.createElement("div")
playerY.classList.add("score");
gameScore.appendChild(playerY);
const imagenY = document.createElement("img");
imagenY.classList.add("img-score")
imagenY.src = "Img/o.png";

playerY.appendChild(imagenY);

const textX = document.createElement("p")
textX.classList.add("score-text")
playerX.appendChild(textX)

const textY = document.createElement("p")
textY.classList.add("score-text")
playerY.appendChild(textY)





function boardPosition() {

    playerTurn.innerText = "Player X turn"
    gameScore.classList.remove("disabled")



    for (let i = 0; i < 9; i++) {



        const creator = document.createElement("div");
        creator.classList.add("board");
        game.appendChild(creator);

        creator.addEventListener('click', function () {
            if (creator.textContent == '') {
                if (player == "X") {
                    playerTurn.innerText = "Player O turn"
                    creator.textContent = "X";
                    const imagenX = document.createElement("img");
                    creator.classList.add("img");
                    imagenX.src = "Img/X.png";
                    imagenX.alt = "X";

                    creator.appendChild(imagenX);
                    player = "O";
                } else if (player == "O") {
                    creator.textContent = "O";
                    playerTurn.innerText = "Player X turn"

                    const imagenO = document.createElement("img");
                    creator.classList.add("img");
                    imagenO.src = "Img/O.png";
                    imagenO.alt = "O";

                    creator.appendChild(imagenO);
                    player = "X";

                }
            }
            checkWinner();
        });

        board.push(creator)

    }

}

function checkWinner() {


    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a].textContent == board[b].textContent && board[b].textContent == board[c].textContent && board[a].textContent !== "") {
            if (board[a].textContent == "X") {
                console.log("Jugador X gana");
                board[a].style.backgroundColor = "#C0D9D9";
                board[b].style.backgroundColor = "#C0D9D9";
                board[c].style.backgroundColor = "#C0D9D9";
                playerTurn.innerText = "Player X Wins!"
                playerTurn.style.color = "#C0D9D9";

                setTimeout(resetGame, 1000);
                contX++;
                score();


            } else {
                console.log("Jugador O gana")
                board[a].style.backgroundColor = "#F3D7D7";
                board[b].style.backgroundColor = "#F3D7D7";
                board[c].style.backgroundColor = "#F3D7D7";
                playerTurn.innerText = "Player O Wins!"
                playerTurn.style.color = "#F3D7D7";

                setTimeout(resetGame, 1000);


                contY++;
                score();
            }

            break;
        } else if (!board.some((div) => div.textContent == "")) {
            for (const div of board) {

                div.style.backgroundColor = "#FFC0CB"
            }

            playerTurn.innerText = "Empate"
            playerTurn.style.color = "#FF0000"
            setTimeout(resetGame, 1000);

        }



    }


}

function hideButton() {
    3
    button.addEventListener("mousedown", function () {
        button.disabled = true;
        header.style.display = "none";
        setTimeout(boardPosition, 200);
    });
}

window.addEventListener("load", function () {
    hideButton();
});

function score() {

    textX.innerText = contX;

    textY.innerText = contY;

}

function resetGame() {
    for (const div of board) {
        div.textContent = "";
        div.style.backgroundColor = "";
    }

    player = "X";
    playerTurn.innerText = "Player X turn";
    playerTurn.style.color = "#808080"
}


console.log(board)