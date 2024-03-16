import { LOGGED_IN, LOGIN_DATA } from "../action/globalState.jsx";

const initialValues = {
  user: {
    loggedIn: false,
    username: "",
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
    default:
      return state;
  }
};
