import { data } from "autoprefixer";

export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const LOGIN_DATA = "LOGIN_DATA";
export const SIGN_UP_DATA = "SIGN_UP_DATA";
export const TWEET_DATA = "TWEET_DATA";

export const logInChange = () => {
  return { type: LOGGED_IN };
};

export const logOutChange = () => {
  return { type: LOGGED_OUT };
};

export const loginData = (data) => {
  return { type: LOGIN_DATA, payload: data };
};

export const singUpData = (data) => {
  return { type: SIGN_UP_DATA, payload: data };
};

export const tweetData = (data) => {
  return { type: TWEET_DATA, payload: data };
};
