import { BOARD_SELECT_CELL, BOARD_GENERATE_NEW } from "../actions/types";

// export default function(state = {}, action) {
//   switch (action.type) {
//     case FACEBOOK_LOGIN_SUCCESS:
//       return { token: action.payload };
//     case FACEBOOK_LOGIN_FAIL:
//       return { token: null };
//     default:
//       return state;
//   }
// }

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
      console.log("@ BOARD_SELECT_CELL reducer");
      return Object.assign({}, state, { selectedCell: action.payload });
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
    default: {
      return state;
    }
  }
};
