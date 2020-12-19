import { retiredForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function retiredReducer(state = initialState, action) {
  switch (action.type) {
    case retiredForms.submit_retired:
      return {
        ...state,
        loading: "submiting",
      };
    case retiredForms.submit_retired_fail:
      return {
        ...state,
        loading: "",
        submitError: action.payload,
      };
    case retiredForms.submit_retired_success:
      return {
        ...state,
        loading: "",
        userData: action.payload,
      };

    default:
      return state;
  }
}
