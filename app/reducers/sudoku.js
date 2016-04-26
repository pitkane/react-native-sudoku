

const defaultState = {
  board: null,
  // hintsLeft
  selectedNumber: null,
  affectedIndexes: null,
  // startTime
  isLoading: true,
  playing: false,
}

// none, loading, ready, failed

export default function sudoku(state = defaultState, action) {
  switch (action.type) {
    case 'SUDOKU_NEW_GAME':
      return Object.assign({}, state, { playing: true, isLoading: false, board: action.payload.board })
    case 'SUDOKU_SELECT_NUMBER':
      return Object.assign({}, state,
        { selectedNumber: action.payload.selected, affectedIndexes: action.payload.affected }
      )
    case 'SUDOKU_CLEAR_SELECTION':
      return Object.assign({}, state, { selectedNumber: null, affectedIndexes: null })
    case 'SUDOKU_INSERT_NUMBER':
      return Object.assign({}, state, { board: action.payload, affectedIndexes: { } })
    default:
      return state
  }
}
