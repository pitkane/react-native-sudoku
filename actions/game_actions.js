import axios from "axios";

import { GAME_GENERATE_NEW } from "./types";

export const generateNewGame = () => {
  return {
    type: GAME_GENERATE_NEW
  };
};
