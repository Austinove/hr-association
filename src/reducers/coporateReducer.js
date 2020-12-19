import { coporateForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function coporateReducer(state = initialState, action) {
  switch (action.type) {
    case coporateForms.submit_coporate:
      return {
        ...state,
        loading: "submiting",
      };
    case coporateForms.submit_coporate_fail:
      return {
        ...state,
        loading: "",
        submitError: action.payload,
      };
    case coporateForms.submit_coporate_success:
      return {
        ...state,
        loading: "",
        userData: action.payload,
      };

    default:
      return state;
  }
}
