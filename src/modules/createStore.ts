import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import logger from "redux-logger";
import player, { PlayerState } from "./player";

const rootReducer = combineReducers({
  player
});

export default function createStore() {
  const store = reduxCreateStore(rootReducer, applyMiddleware(logger));
  return { store };
}

export interface ReduxState {
  player: PlayerState;
}
