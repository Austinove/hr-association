import api from "../api";
import { studentsForms } from "../constants";

const actionLoad = () => {
  return {
    type: studentsForms.submiting,
  };
};

export const submit_student = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .register_member()
      .then((response) => {
        dispatch({
          type: studentsForms.submit_student_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: studentsForms.submit_student_fail,
          payload: error,
        });
      });
  };
};
