import { createStore } from "redux";
import produce from "immer";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  token: null,
};

function reducer(state = initialState, action) {
  if (action.type === "setToken") {
    return produce(state, (draft) => {
      draft.token = action.payload;
    });
  }
  return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
