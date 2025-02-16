import { WINNER_COMBOS } from "../constants.js";
export const checkWinnerFrom = (boardToCheck) => {
  //Revisar todas las combinaciones ganadoras
  // para ver si x u o ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // o -> x u o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // x u o
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}