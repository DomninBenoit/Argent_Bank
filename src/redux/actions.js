export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const logOut = () => ({
  type: "LOG_OUT",
});

export const setProfile = (payload) => ({
  type: "SET_PROFILE",
  payload: payload,
});
