import { NoteInterface } from "../../utils/interfaces";
import { Dispatch } from "react";

export interface NoteAction {
  payload: Partial<NoteInterface>;
  type: NoteActionType;
}

export enum NoteActionType {
  GET_NOTES,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
}

export interface NoteContextInterface {
  notes: NoteInterface[];
  dispatch?: Dispatch<NoteAction>;
}
