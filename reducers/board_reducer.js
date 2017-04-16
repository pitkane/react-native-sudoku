import { BOARD_SELECT_CELL } from "../actions/types";

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
      return Object.assign({}, state, { selectedCell: action.payload });
    }
    default: {
      return state;
    }
  }
};
