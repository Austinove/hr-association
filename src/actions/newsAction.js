import api from "../api";
import { newsConstants } from "../constants";

const actionLoad = () => {
  return {
    type: newsConstants.newsLoading,
  };
};

export const fetch_news = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .fetch_news()
      .then((response) => {
        console.log(response);
        dispatch({
          type: newsConstants.fetch_news_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: newsConstants.fetch_news_fail,
          payload: error,
        });
      });
  };
};

export const filter_news = (filterVariable) => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .filter_news(filterVariable)
      .then((response) => {
        console.log(response);
        dispatch({
          type: newsConstants.filter_news_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: newsConstants.filter_news_fail,
          payload: error,
        });
      });
  };
};
