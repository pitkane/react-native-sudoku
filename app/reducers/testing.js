

const defaultState = {
  testing: true,
}

// none, loading, ready, failed

export default function sudoku(state = defaultState, action) {
  switch (action.type) {
    case 'TESTING_STOP_PLAYING':
      console.log('mrmo')
      return Object.assign({}, state, { testing: false })
    default:
      return state
  }
}
