import axios from "axios";
import Cookies from "js-cookie";
import { Host } from "../../../utils/config";
export const userSignup = (action) => {
  return axios.request({
    method: "POST",
    url: `${Host}/user/signup`,
    data: action.postdata,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const userLogin = (action) => {
  return axios.request({
    method: "POST",
    url: `${Host}/user/login`,
    data: action.postdata,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const userDatareq = () => {
  const Token = Cookies.get("jwtToken");
  return axios.request({
    method: "GET",
    url: `${Host}/user/me`,
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};
