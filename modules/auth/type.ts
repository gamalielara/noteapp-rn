import React from "react";

export enum USER_ACTION_KEY {
  LOGIN,
  LOGOUT,
}
export interface AuthUserStateInterface {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export interface AuthContextValueInterface {
  user: AuthUserStateInterface | null;
  dispatch?: React.Dispatch<AuthUserActionInterface>;
}

export interface AuthUserActionInterface {
  payload: AuthUserStateInterface;
  type: USER_ACTION_KEY;
}
