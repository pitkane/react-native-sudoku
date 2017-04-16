import axios from "axios";

import { BOARD_SELECT_CELL } from "./types";

export const selectCell = cell => {
  return {
    payload: cell,
    type: BOARD_SELECT_CELL
  };
};
