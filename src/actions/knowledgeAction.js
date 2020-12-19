import api from "../api";
import { knowledgeConstants, knowledgeSubscription } from "../constants";

const actionLoad = () => {
  return {
    type: knowledgeConstants.knowledgeLoading,
  };
};
const submiting = () => {
  return {
    type: knowledgeSubscription.submiting,
  };
};

export const fetch_knowledge = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .fetch_knowledge()
      .then((response) => {
        dispatch({
          type: knowledgeConstants.fetch_knowledge_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: knowledgeConstants.fetch_knowledge_fail,
          payload: error,
        });
      });
  };
};

export const knowledge_subscribe = (userData) => {
  return (dispatch) => {
    dispatch(submiting());

    return api
      .knowledgeSubscribe()
      .then((response) => {
        dispatch({
          type: knowledgeSubscription.submit_subscription_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: knowledgeSubscription.submit_subscription_fail,
          payload: error,
        });
      });
  };
};
