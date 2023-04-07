import { NoteAction, NoteActionType } from "./types";
import { NoteInterface } from "../../utils/interfaces";

export const getAllNotes = () => {
  return {
    type: NoteActionType,
  };
};

export const addNote = (payload: Required<NoteInterface>) => {
  return {
    type: NoteActionType.CREATE_NOTE,
    payload,
  };
};

export const editNote = (payload: Required<NoteInterface>) => {
  return {
    type: NoteActionType.EDIT_NOTE,
    payload,
  };
};

export const deleteNote = (payload: Pick<NoteInterface, "id">) => {
  return {
    type: NoteActionType.DELETE_NOTE,
    payload,
  };
};
