import _ from 'lodash'
import sudoku from '../containers/sudoku.js'

import {
  COLS,
  ROWS,
  INDEXES,
  SUDOKU_SELECT_NUMBER,
  SUDOKU_CLEAR_SELECTION,
  SUDOKU_NEW_GAME,
  SUDOKU_INSERT_NUMBER } from '../containers/constants'

export function clearSelection() {
  return {
    type: SUDOKU_CLEAR_SELECTION,
  }
}

export function generateGame(difficulty = 'medium') {
  const emptyBoard = {}

  for (const colItem of COLS) {
    for (const rowItem of ROWS) {
      emptyBoard[rowItem + colItem] = null
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

export function selectNumber(index) {
  const affectedIndexes = { }
  const row = index[0]
  const col = index[1]

  for (let i = 1; i < 10; i++) {
    _.set(affectedIndexes, row + i, true)
  }
  for (const item of ROWS) {
    _.set(affectedIndexes, item + col, true)
  }

  return {
    type: SUDOKU_SELECT_NUMBER,
    payload: { selected: index, affected: affectedIndexes },
  }
}
