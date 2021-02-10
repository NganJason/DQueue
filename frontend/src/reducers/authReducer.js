import { LOGIN, LOGOUT } from "../reduxConst/authConst";

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...action.payload,
      };
    }

    case LOGOUT: {
      return {};
    }

    default:
      return state;
  }
}
