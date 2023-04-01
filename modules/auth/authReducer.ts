import {
  AuthUserActionInterface,
  AuthUserStateInterface,
  USER_ACTION_KEY,
} from "./type";

const authReducer = (
  state: AuthUserStateInterface | null,
  action: AuthUserActionInterface
): AuthUserStateInterface | null => {
  switch (action.type) {
    case USER_ACTION_KEY.LOGIN:
      return {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        picture: action.payload.picture,
      };
    case USER_ACTION_KEY.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authReducer;
