import api from "../api";
import { proffessionalForms } from "../constants";

const actionLoad = () => {
  return {
    type: proffessionalForms.submiting,
  };
};

export const submit_proffessional = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .register_member()
      .then((response) => {
        dispatch({
          type: proffessionalForms.submit_proffessional_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: proffessionalForms.submit_proffessional_fail,
          payload: error,
        });
      });
  };
};
