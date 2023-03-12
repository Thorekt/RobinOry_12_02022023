/*
 * This file contains mock data for the app.
 * It's used by the mock api (MockApi.js) to simulate the server.
 */

/*
 * USERS contains base information about users.
 * One user contain:
 * - id: user id
 * - userInfos: user first name, last name and age
 * - todayScore: user score for today
 * - keyData: user key data (calorie count, protein count, carbohydrate count, lipid count)
 */
const USERS = [
  {
    data: {
      id: 12,
      userInfos: { firstName: 'Karl', lastName: 'Dovineau', age: 31 },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  },
  {
    data: {
      id: 18,
      userInfos: { firstName: 'Cecilia', lastName: 'Ratorez', age: 34 },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  },
];

/*
 * USERS_ACTIVITY contains daily activity information about users.
 * One user contain:
 * - userId: user id
 * - sessions: array of sessions
 * -- day: session day
 * -- kilogram: user weight for this session
 * -- calories: user calories for this session
 */
const USERS_ACTIVITY = [
  {
    data: {
      userId: 12,
      sessions: [
        { day: '2020-07-01', kilogram: 80, calories: 240 },
        { day: '2020-07-02', kilogram: 80, calories: 220 },
        { day: '2020-07-03', kilogram: 81, calories: 280 },
        { day: '2020-07-04', kilogram: 81, calories: 290 },
        { day: '2020-07-05', kilogram: 80, calories: 160 },
        { day: '2020-07-06', kilogram: 78, calories: 162 },
        { day: '2020-07-07', kilogram: 76, calories: 390 },
      ],
    },
  },
  {
    data: {
      userId: 18,
      sessions: [
        { day: '2020-07-01', kilogram: 70, calories: 240 },
        { day: '2020-07-02', kilogram: 69, calories: 220 },
        { day: '2020-07-03', kilogram: 70, calories: 280 },
        { day: '2020-07-04', kilogram: 70, calories: 500 },
        { day: '2020-07-05', kilogram: 69, calories: 160 },
        { day: '2020-07-06', kilogram: 69, calories: 162 },
        { day: '2020-07-07', kilogram: 69, calories: 390 },
      ],
    },
  },
];

/*
 * USERS_AVERAGE_SESSIONS contains average sessions information about users.
 * One user contain:
 * - userId: user id
 * - sessions: array of sessions
 * -- day: session day
 * -- sessionLength: user session length for this session
 */
const USERS_AVERAGE_SESSIONS = [
  {
    data: {
      userId: 12,
      sessions: [
        { day: 1, sessionLength: 30 },
        { day: 2, sessionLength: 23 },
        { day: 3, sessionLength: 45 },
        { day: 4, sessionLength: 50 },
        { day: 5, sessionLength: 0 },
        { day: 6, sessionLength: 0 },
        { day: 7, sessionLength: 60 },
      ],
    },
  },
  {
    data: {
      userId: 18,
      sessions: [
        { day: 1, sessionLength: 30 },
        { day: 2, sessionLength: 40 },
        { day: 3, sessionLength: 50 },
        { day: 4, sessionLength: 30 },
        { day: 5, sessionLength: 30 },
        { day: 6, sessionLength: 50 },
        { day: 7, sessionLength: 50 },
      ],
    },
  },
];

/*
 * USERS_PERFORMANCE contains performance information about users.
 * One user contain:
 * - userId: user id
 * - kind: object containing kind id and kind name
 * - data: array of performance data
 * -- value: performance value
 * -- kind: performance kind id
 */
const USERS_PERFORMANCE = [
  {
    data: {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        { value: 80, kind: 1 },
        { value: 120, kind: 2 },
        { value: 140, kind: 3 },
        { value: 50, kind: 4 },
        { value: 200, kind: 5 },
        { value: 90, kind: 6 },
      ],
    },
  },
  {
    data: {
      userId: 18,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        { value: 200, kind: 1 },
        { value: 240, kind: 2 },
        { value: 80, kind: 3 },
        { value: 80, kind: 4 },
        { value: 220, kind: 5 },
        { value: 110, kind: 6 },
      ],
    },
  },
];

export { USERS, USERS_ACTIVITY, USERS_AVERAGE_SESSIONS, USERS_PERFORMANCE };
