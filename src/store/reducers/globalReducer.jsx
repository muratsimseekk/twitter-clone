import { LOGGED_IN, LOGIN_DATA, SIGN_UP_DATA } from "../action/globalState.jsx";

const initialValues = {
  user: {
    loggedIn: false,
    username: "",
    email: "",
  },
};

export const globalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          loggedIn: true,
          username: action.payload.username,
        },
      };
    case SIGN_UP_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          loggedIn: true,
          username: action.payload.username,
          email: action.payload.email,
        },
      };
    default:
      return state;
  }
};
