import axios from "axios";
import { apiUrl } from "../constants";

const apiInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "content-type": "application/json",
  },
});

export default {
  //knowledge api
  fetch_knowledge: () =>
    apiInstance({
      method: "GET",
      url: "/knowldgehub",
    }),
  //homepage api
  fetch_homeData: () =>
    apiInstance({
      method: "GET",
      url: "/homeDetails",
    }),
  //leadership api
  fetch_leadership: () =>
    apiInstance({
      method: "GET",
      url: "/leadership",
    }),
  //register Member
  register_member: (user_data) =>
    apiInstance({
      method: "POST",
      url: "/register",
      data: user_data,
    }),
  //Fetch News
  fetch_news: () =>
    apiInstance({
      method: "GET",
      url: "/allnewsletter",
    }),
  //Filter News
  filter_news: (filterVariable) =>
    apiInstance({
      method: "POST",
      url: "/news",
      data: filterVariable,
    }),
};
