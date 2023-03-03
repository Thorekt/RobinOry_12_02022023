import axios from 'axios';

const BASE_URL = `http://localhost:3000`;

/*
 * API calls to get user information. contains 4 calls (base, activity, average-sessions, performance)
 */
const api = {
  /*
   * Get user base information
   * @param {string} userId - user id
   * @returns {Promise}
   */
  getUserBaseInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}`);
  },
  /*
   * Get user activity information
   * @param {string} userId - user id
   * @returns {Promise}
   */
  getUserActivityInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/activity`);
  },
  /*
   * Get user average sessions information
   * @param {string} userId - user id
   * @returns {Promise}
   */
  getUserAverageSessionsInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
  },
  /*
   * Get user performance information
   * @param {string} userId - user id
   * @returns {Promise}
   */
  getUserPerformanceInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/performance`);
  },
};

export default api;
