// import { BOARD_SELECT_CELL } from "../actions/types";

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
  isLoading: false,
  playing: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
