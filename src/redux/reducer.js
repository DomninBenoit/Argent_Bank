import { createStore } from "redux";
import produce from "immer";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  token: "",
};

function reducer(state = initialState, action) {
  if (action.type === "SET_TOKEN") {
    return produce(state, (draft) => {
      draft.token = action.payload;
    });
  }
  if (action.type === "LOG_OUT") {
    return produce(state, (draft) => {
      draft.token = "";
      draft.email = "";
      draft.firstName = "";
      draft.lastName = "";
    });
  }
  if (action.type === "SET_PROFILE") {
    return produce(state, (draft) => {
      draft.firstName = action.payload.firstName;
      draft.lastName = action.payload.lastName;
    });
  }
  return state;
}

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
