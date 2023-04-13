import { createContext, useReducer } from "react";
import { NoteInterface } from "../../utils/interfaces";
import noteReducer from "./noteReducer";
import { NoteContextInterface } from "./types";

export const NoteContext = createContext<NoteContextInterface>({ notes: [] });

const INITIAL_VALUE: NoteInterface[] = [];

// @ts-ignore
export const NoteContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, INITIAL_VALUE);

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
