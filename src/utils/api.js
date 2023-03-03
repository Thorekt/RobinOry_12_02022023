import axios from 'axios';

const BASE_URL = `http://localhost:3000`;

const api = {
  getUserBaseInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}`);
  },
  getUserActivityInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/activity`);
  },
  getUserAverageSessionsInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
  },
  getUserPerformanceInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/performance`);
  },
};

export default api;
