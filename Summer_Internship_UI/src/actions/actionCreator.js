import * as actions from "./actionTypes";

export const updateDashboard = data => ({
  type: actions.UPDATE_DASHBOARD,
  payload: data
});