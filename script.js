const Player = (name, mark) => {
    return { name, mark };
};

const gameController = (() => {
    const player1 = Player("Player 1, X");
    const player2 = Player("Player 2, O");

    let activePlayer = player1;
    let gameOver = false;

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    const getActivePlayer = () => activePlayer;

    const switchPlayer = () => {
        activePlayer = (activePlayer === player1) ? player2 : player1;
    };

    const checkWin = (boardArray, mark) => {
        return boardArray.every(index => boardArray[index] === mark);
    };

    const checkDraw = (boardArray) => {
        return boardArray.every(cell => cell !== "");
    };

    const playRound = (index) => {
        if(gameOver){
            console.log("Game is over. Please reset to play again.");
            return;
        }

        const currentBoard = board.getBoard();

        if(checkWin(currentBoard, activePlayer.mark)) {
            console.log(`${activePlayer.name} wins!`);
            gameOver = true;
            return;
        }

        if(checkDraw(currentBoard)) {
            console.log("It's a draw!");
            gameOver = true;
            return;
        }

        switchPlayer();
        console.log(`It's ${activePlayer.name}'s turn.`);
    };

    const restart = () => {
        board.resetBoard();
        activePlayer = player1;
        gameOver = false;
        console.log("Game reset. It's Player 1's turn.");
    };

    return { getActivePlayer, playRound, restart };
})();


const board = (() => {
    let boardArray = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => boardArray;

    const setMark = (index, mark) => {
        if(boardArray[index] === "") {
            boardArray[index] = mark;
            return true;
        }
        return false;
    }

    const resetBoard = () => {
        boardArray = ["", "", "", "", "", "", "", "", ""];
    }

    return { getBoard, setMark, resetBoard };
})();