import { store } from "../store";
import { LOGIN, LOGOUT } from "../reduxConst/authConst";

export const setLogIn = (payload) => {
  store.dispatch({ type: LOGIN, payload: payload });
};

export const setLogOut = () => {
  store.dispatch({ type: LOGOUT });
};
