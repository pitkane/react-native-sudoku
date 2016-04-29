

const defaultState = {
  board: null,
  original: null,
  // hintsLeft
  selectedIndex: null,
  affectedIndexes: null,
  // startTime
  isLoading: true,
  playing: false,
}

// none, loading, ready, failed

export default function sudoku(state = defaultState, action) {
  switch (action.type) {
    case 'SUDOKU_NEW_GAME': {
      return Object.assign({}, state,
        { playing: true, isLoading: false, board: action.payload.board, original: action.payload.original })
    }
    case 'SUDOKU_SELECT_INDEX': {
      return Object.assign({}, state, { selectedIndex: action.payload })
    }
    case 'SUDOKU_UPDATE_AFFECTED': {
      return Object.assign({}, state, { affectedIndexes: action.payload })
    }
    case 'SUDOKU_CLEAR_SELECTION': {
      return Object.assign({}, state, { selectedNumber: null, affectedIndexes: null })
    }
    // case 'SUDOKU_INSERT_NUMBER':
    //   return Object.assign({}, state, { board: action.payload })
    case 'SUDOKU_INSERT_NUMBER': {
      const newBoard = state.board
      newBoard[state.selectedIndex] = action.payload
      return Object.assign({}, state, { board: newBoard })
    }
    case 'SUDOKU_STOP_PLAYING': {
      return Object.assign({}, state, { playing: false })
    }
    default: {
      return state
    }
  }
}
