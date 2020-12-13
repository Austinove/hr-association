import api from "../api";
import { knowledgeConstants } from "../constants";

const actionLoad = () => {
  return {
    type: knowledgeConstants.knowledgeLoading,
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
