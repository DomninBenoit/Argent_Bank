export const SET_TOKEN = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const LOG_OUT = () => ({
  type: "LOG_OUT",
});

export const SET_PROFILE = (payload) => ({
  type: "SET_PROFILE",
  payload: payload,
});
