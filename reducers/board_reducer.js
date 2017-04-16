import {
  BOARD_SELECT_CELL,
  BOARD_GENERATE_NEW,
  BOARD_INSERT_NUMBER
} from "../actions/types";

const defaultState = {
  board: null,
  original: null,
  // hintsLeft
  selectedCell: null,
  // affectedIndexes: null,
  // startTime
  isLoading: true,
  playing: false
};

// none, loading, ready, failed

export default (state = defaultState, action) => {
  switch (action.type) {
    case BOARD_SELECT_CELL: {
      console.log("@ BOARD_SELECT_CELL reducer. Payload:", action.payload);
      // debugger;
      const selectedCell = action.payload;
      const oldselectedCell = state.selectedCell;
      const newBoard = state.board;
      newBoard[selectedCell].selected = true;
      if (oldselectedCell) newBoard[oldselectedCell].selected = false;

      return Object.assign({}, state, {
        board: newBoard,
        selectedCell: action.payload
      });
    }
    case BOARD_GENERATE_NEW: {
      const newBoard = action.payload;
      return Object.assign({}, state, {
        board: newBoard,
        original: newBoard,
        isLoading: false,
        playing: true
      });
    }
    case BOARD_INSERT_NUMBER: {
      if (state.selectedCell) {
        // debugger;
        const newBoard = state.board;
        newBoard[state.selectedCell].number = action.payload;
        newBoard[state.selectedCell].selected = false;
        return Object.assign({}, state, {
          board: newBoard,
          selectedCell: null
        });
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
