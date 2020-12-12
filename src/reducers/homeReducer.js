import { homeConstants } from "../constants";

const initialState = {
  homeData: [],
  loading: "",
  homeError: "",
};

export function homeData(state = initialState, action) {
  switch (action.type) {
    case homeConstants.fetch_hotels_success:
      return {
        ...state,
        loading: "",
        homeData: action.payload,
      };
    case homeConstants.fetch_hotels_fail:
      return {
        ...state,
        homeError: action.payload,
      };
    case homeConstants.homeLoading:
      return {
        ...state,
        loading: "Loading",
      };

    default:
      return state;
  }
}
