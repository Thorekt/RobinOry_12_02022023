import {
  USERS,
  USERS_ACTIVITY,
  USERS_AVERAGE_SESSIONS,
  USERS_PERFORMANCE,
} from './MockData.js';

/*
 * Fake API calls to get user information. contains 4 calls (base, activity, average-sessions, performance)
 * this is a mock api, it is not connected to the server, it get it's data from ./MockData.js
 */
const MockApi = {
  /*
   * Get user base information
   * @param {string} userId - user id
   * @returns {Object} see USERS in ./MockData.js for more informations
   */
  getUserBaseInformation: (userId) => {
    const userBaseInformation = USERS.find((user) => {
      return user.data.id === userId;
    });
    if (userBaseInformation === undefined) {
      return 'can not get user';
    }
    return userBaseInformation;
  },

  /*
   * Get user activity information
   * @param {string} userId - user id
   * @returns {Object} see USERS_ACTIVITY in ./MockData.js for more informations
   */
  getUserActivityInformation: (userId) => {
    const userActivityInformation = USERS_ACTIVITY.find((user) => {
      return user.data.id === userId;
    });
    if (userActivityInformation === undefined) {
      return 'can not get user';
    }
    return userActivityInformation;
  },

  /*
   * Get user average sessions information
   * @param {string} userId - user id
   * @returns {Object} see USERS_AVERAGE_SESSIONS in ./MockData.js for more informations
   */
  getUserAverageSessionsInformation: (userId) => {
    const userAverageSessionsInformation = USERS_AVERAGE_SESSIONS.find(
      (user) => {
        return user.data.id === userId;
      }
    );
    if (userAverageSessionsInformation === undefined) {
      return 'can not get user';
    }
    return userAverageSessionsInformation;
  },

  /*
   * Get user performance information
   * @param {string} userId - user id
   * @returns {Object} see USERS_PERFORMANCE in ./MockData.js for more informations
   */
  getUserPerformanceInformation: (userId) => {
    const userPerformanceInformation = USERS_PERFORMANCE.find((user) => {
      return user.data.id === userId;
    });
    if (userPerformanceInformation === undefined) {
      return 'can not get user';
    }
    return userPerformanceInformation;
  },
};

export default MockApi;
