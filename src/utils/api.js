import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = `http://localhost:3000`;

/*
 * API calls to get user information. contains 4 calls (base, activity, average-sessions, performance)
 */
const Api = {
  /*
   * Get user base information
   * @param {number} userId - user id
   * @returns {Promise}
   */
  getUserBaseInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}`);
  },
  /*
   * Get user activity information
   * @param {number} userId - user id
   * @returns {Promise}
   */
  getUserActivityInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/activity`);
  },
  /*
   * Get user average sessions information
   * @param {number} userId - user id
   * @returns {Promise}
   */
  getUserAverageSessionsInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
  },
  /*
   * Get user performance information
   * @param {number} userId - user id
   * @returns {Promise}
   */
  getUserPerformanceInformation: (userId) => {
    return axios.get(`${BASE_URL}/user/${userId}/performance`);
  },
};

Api.getUserBaseInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};
Api.getUserActivityInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};
Api.getUserAverageSessionsInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};
Api.getUserPerformanceInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Api;
