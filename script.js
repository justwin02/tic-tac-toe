const Player = (name, mark) => {
    return { name, mark };
};


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