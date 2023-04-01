import { createContext, useReducer } from "react";
import authReducer from "./authReducer";
import { AuthContextValueInterface } from "./type";

export const AuthContext = createContext<AuthContextValueInterface>({
  user: null,
});

// @ts-ignore
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, null);
  return (
    <AuthContext.Provider value={{ user: state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
