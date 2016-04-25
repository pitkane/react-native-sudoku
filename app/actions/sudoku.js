import _ from 'lodash'
import sudoku from '../containers/sudoku.js'

import { COLS, ROWS, SUDOKU_SELECT_NUMBER, SUDOKU_NEW_GAME, SUDOKU_INSERT_NUMBER } from '../containers/constants'

export function clearSelection() {
  return {
    type: SUDOKU_SELECT_NUMBER,
    payload: null,
  }
}

export function generateGame(difficulty = 'medium') {
  const emptyBoard = {}

  for (const colItem of COLS) {
    for (const rowItem of ROWS) {
      emptyBoard[colItem + rowItem] = null
    }
  }
  const puzzle = sudoku.generate(difficulty)
  const mergedBoard = _.merge(emptyBoard, puzzle)

  return {
    type: SUDOKU_NEW_GAME,
    payload: {
      board: mergedBoard,
    },
  }
}

export function insertNumber(number, selectedIndex, board) {
  const newBoard = board
  newBoard[selectedIndex] = number

  return {
    type: SUDOKU_INSERT_NUMBER,
    payload: newBoard,
  }
}
