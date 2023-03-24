import {
  USERS,
  USERS_ACTIVITY,
  USERS_AVERAGE_SESSIONS,
  USERS_PERFORMANCE,
} from './MockData.js';

import PropTypes from 'prop-types';

/*
 * Fake API calls to get user information. contains 4 calls (base, activity, average-sessions, performance)
 * this is a mock api, it is not connected to the server, it get it's data from ./MockData.js
 */
const MockApi = {
  /*
   * Get user base information, see USERS in ./MockData.js for more informations
   * @param {number} userId - user id
   * @returns {promise}
   */
  getUserBaseInformation: (userId) => {
    let userBaseInformation = USERS.find((user) => {
      return user.data.id === userId;
    });
    if (userBaseInformation === undefined) {
      userBaseInformation = 'can not get user';
    }
    const promise = new Promise((resolve) => {
      resolve(userBaseInformation);
    });

    return promise;
  },

  /*
   * Get user activity information, see USERS_ACTIVITY in ./MockData.js for more informations
   * @param {number} userId - user id
   * @returns {promise}
   */
  getUserActivityInformation: (userId) => {
    let userActivityInformation = USERS_ACTIVITY.find((user) => {
      return user.data.userId === userId;
    });
    if (userActivityInformation === undefined) {
      userActivityInformation = 'can not get user';
    }

    const promise = new Promise((resolve) => {
      resolve(userActivityInformation);
    });
    return promise;
  },

  /*
   * Get user average sessions information, see USERS_AVERAGE_SESSIONS in ./MockData.js for more informations
   * @param {number} userId - user id
   * @returns {promise}
   */
  getUserAverageSessionsInformation: (userId) => {
    let userAverageSessionsInformation = USERS_AVERAGE_SESSIONS.find((user) => {
      return user.data.userId === userId;
    });
    if (userAverageSessionsInformation === undefined) {
      userAverageSessionsInformation = 'can not get user';
    }
    const promise = new Promise((resolve) => {
      resolve(userAverageSessionsInformation);
    });
    return promise;
  },

  /*
   * Get user performance information, see USERS_PERFORMANCE in ./MockData.js for more informations
   * @param {number} userId - user id
   * @returns {promise}
   */
  getUserPerformanceInformation: (userId) => {
    let userPerformanceInformation = USERS_PERFORMANCE.find((user) => {
      return user.data.userId === userId;
    });
    if (userPerformanceInformation === undefined) {
      userPerformanceInformation = 'can not get user';
    }
    const promise = new Promise((resolve) => {
      resolve(userPerformanceInformation);
    });
    return promise;
  },
};

MockApi.getUserBaseInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};
MockApi.getUserActivityInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};
MockApi.getUserAverageSessionsInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};
MockApi.getUserPerformanceInformation.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default MockApi;
