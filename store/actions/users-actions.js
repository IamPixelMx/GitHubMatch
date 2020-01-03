import {
  GET_USERS_MATCH,
  GET_USERS_MATCH_SUCCESS,
  GET_USERS_MATCH_FAIL,
  CLEAN_USERS_MATCH
} from "../../constants/ActionTypes";

export const getUsersMatch = (payload = {}) => ({
  type: GET_USERS_MATCH,
  payload
});

export const getUsersMatchSuccess = payload => ({
  type: GET_USERS_MATCH_SUCCESS,
  payload
});

export const getUsersMatchFail = payload => ({
  type: GET_USERS_MATCH_FAIL,
  payload
});

export const cleanUsersMatch = () => ({
  type: CLEAN_USERS_MATCH
});
