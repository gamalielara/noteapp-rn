import { NoteAction, NoteActionType } from "./types";
import { NoteInterface } from "../../utils/interfaces";

export const getAllNotes = () => {
  return {
    type: NoteActionType.GET_NOTES,
  };
};

export const addNotes = (payload: Required<NoteInterface>) => {
  return {
    type: NoteActionType.CREATE_NOTE,
    payload,
  };
};

export const fetchAllNotes = (payload: Required<NoteInterface>) => {
  return {
    type: NoteActionType.FETCH_ALL_NOTES,
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
