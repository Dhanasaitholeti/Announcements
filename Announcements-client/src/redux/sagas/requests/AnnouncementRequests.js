import axios from "axios";
import Cookies from "js-cookie";

export const getAnnouncementsReq = () => {
  const Token = Cookies.get("jwtToken");
  return axios.request({
    method: "GET",
    url: "http://localhost:8080/announcements/",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};

export const postNewAnnouncement = (action) => {
  console.log(action);
  const token = Cookies.get("jwtToken");
  return axios.request({
    method: "POST",
    url: "http://localhost:8080/announcements/Add-Announcement",
    data: action.postData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeAnnoucement = (action) => {
  const token = Cookies.get("jwtToken");
  const id = action.id;
  console.log(id);
  return axios.request({
    method: "DELETE",
    url: `http://localhost:8080/announcements/del-Announcement/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const showAnnoucementRequest = (action) => {
  const token = Cookies.get("jwtToken");
  const id = action.id;
  return axios.request({
    method: "GET",
    url: `http://localhost:8080/announcements/getAnnouncement/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateAnnouncementReq = (action) => {
  const token = Cookies.get("jwtToken");
  const id = action.data.id;
  return axios.request({
    method: "PATCH",
    data: action.data.editData,
    url: `http://localhost:8080/announcements/update-Announcement/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
