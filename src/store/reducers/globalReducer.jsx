import {
  LOGGED_IN,
  LOGIN_DATA,
  SIGN_UP_DATA,
  TWEET_DATA,
} from "../action/globalState.jsx";

const initialValues = {
  user: {
    loggedIn: false,
    username: "",
    email: "",
  },
  tweets: [],
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
    case TWEET_DATA:
      return {
        ...state,
        tweets: action.payload,
      };

    default:
      return state;
  }
};
