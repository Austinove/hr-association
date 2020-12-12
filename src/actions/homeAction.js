import api from "../api";
import { homeConstants } from "../constants";

const actionLoad = () => {
  return {
    type: homeConstants.homeLoading,
  };
};

export const fetch_homeData = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .fetch_homeData()
      .then((response) => {
        console.log(response);
        dispatch({
          type: homeConstants.fetch_homeData_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: homeConstants.fetch_homeData_fail,
          payload: error,
        });
      });
  };
};
