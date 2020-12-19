import { proffessionalForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function proffesionalReducer(state = initialState, action) {
  switch (action.type) {
    case proffessionalForms.submit_proffessional:
      return {
        ...state,
        loading: "submiting",
      };
    case proffessionalForms.submit_proffessional_fail:
      return {
        ...state,
        loading: "",
        submitError: action.payload,
      };
    case proffessionalForms.submit_proffessional_success:
      return {
        ...state,
        loading: "",
        userData: action.payload,
      };

    default:
      return state;
  }
}
