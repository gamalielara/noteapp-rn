import { NoteInterface } from "../../utils/interfaces";
import { NoteAction, NoteActionType } from "./types";

export default (
  state: NoteInterface[],
  action: NoteAction
): NoteInterface[] => {
  switch (action.type) {
    case NoteActionType.GET_NOTES:
      return action.payload as NoteInterface[];

    case NoteActionType.CREATE_NOTE:
      return [...state, action.payload as NoteInterface];

    case NoteActionType.DELETE_NOTE:
      if (!action.payload?.id) {
        return [...state];
      } else {
        return state.filter((note) => note.id !== action.payload!.id);
      }

    case NoteActionType.EDIT_NOTE:
      if (!action.payload?.id) {
        return [...state];
      } else {
        return state.map((note) => {
          if (note.id !== action.payload?.id) return note;
          return action.payload as NoteInterface;
        });
      }

    default:
      return [...state];
  }
};
