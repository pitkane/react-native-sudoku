import axios from "axios";
import sudoku from "../services/sudoku";
import _ from "lodash";

import { COLS, ROWS } from "../constants";
import {
  BOARD_SELECT_CELL,
  BOARD_GENERATE_NEW,
  BOARD_INSERT_NUMBER
} from "./types";

export const insertNumber = number => {
  return {
    payload: number,
    type: BOARD_INSERT_NUMBER
  };
};

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
  for (const rowItem of ROWS) {
    for (const colItem of COLS) {
      newBoard[rowItem + colItem] = {
        number: null,
        selected: false,
        original: false
      };
    }
  }

  // generate puzzle, and assign number to empty board
  const puzzle = sudoku.generate(difficulty);
  _.map(puzzle, (cell, index) => {
    newBoard[index].number = cell;
    newBoard[index].original = true;
  });

  console.log(`New (${difficulty})board created`, newBoard);

  return {
    payload: newBoard,
    type: BOARD_GENERATE_NEW
  };
};
