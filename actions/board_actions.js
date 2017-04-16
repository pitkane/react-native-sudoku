import axios from "axios";
import sudoku from "../services/sudoku";
import _ from "lodash";

import { COLS, ROWS } from "../constants";
import { BOARD_SELECT_CELL, BOARD_GENERATE_NEW } from "./types";

export const selectCell = cell => {
  console.log("selectCell action with cell: ", cell);
  return {
    payload: cell,
    type: BOARD_SELECT_CELL
  };
};

export const generateNewBoard = (difficulty = "medium") => {
  const newBoard = {};

  // initialize empty board
  for (const colItem of COLS) {
    for (const rowItem of ROWS) {
      newBoard[rowItem + colItem] = {
        number: null,
        selected: false
      };
    }
  }

  // generate puzzle, and assign number to empty board
  const puzzle = sudoku.generate(difficulty);
  _.map(puzzle, (cell, index) => {
    newBoard[index].number = cell;
  });

  console.log(`New (${difficulty})board created`, newBoard);

  return {
    payload: newBoard,
    type: BOARD_GENERATE_NEW
  };
};
