import axios from "axios";
import { store } from "../store";
import { notification } from "antd";
const host = "http://localhost:8081/";
export default () => {
  const token = store.getState().auth.token;
  const api = axios.create({
    baseURL: host,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  api.interceptors.response.use(res => {
    if (res.data.code) {
      return res.data;
    } else {
      notification["error"]({
        message: "错误",
        description: res.data.msg
      });
      return res.data;
    }
  });
  return api;
};
