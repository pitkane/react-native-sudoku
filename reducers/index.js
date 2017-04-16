import { combineReducers } from "redux";
import board from "./board_reducer";
import game from "./game_reducer";

export default combineReducers({
  board,
  game
});
