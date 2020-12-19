import { studentsForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case studentsForms.submit_student:
      return {
        ...state,
        loading: "submiting",
      };
    case studentsForms.submit_student_fail:
      return {
        ...state,
        loading: "",
        submitError: action.payload,
      };
    case studentsForms.submit_student_success:
      return {
        ...state,
        loading: "",
        userData: action.payload,
      };

    default:
      return state;
  }
}
