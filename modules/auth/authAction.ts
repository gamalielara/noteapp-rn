import { AuthUserStateInterface, USER_ACTION_KEY } from "./type";

export const setUser = (user: AuthUserStateInterface) => {
  return {
    type: USER_ACTION_KEY.LOGIN,
    payload: user,
  };
};
