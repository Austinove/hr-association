import api from "../api";
import { retiredForms } from "../constants";

const actionLoad = () => {
  return {
    type: retiredForms.submiting,
  };
};

export const submit_retired = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .register_member()
      .then((response) => {
        dispatch({
          type: retiredForms.submit_retired_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: retiredForms.submit_retired_fail,
          payload: error,
        });
      });
  };
};
