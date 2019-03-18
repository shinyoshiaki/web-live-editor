import { Action, Dispatch } from "redux";

export interface PlayerState {}

export const initialState: PlayerState = { nowPlaylist: [] };

enum ActionName {
  PLAYLIST = "PLAYER_PLAYLIST"
}

type Actions = any;

export default function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionName.PLAYLIST: {
      return {
        ...state,
        nowPlaylist: action.payload
      } as PlayerState;
    }
    default:
      return state;
  }
}
