import { combineReducers } from 'redux';
import collectorDashboardReducer from "./createDashboard"

const allReducers = combineReducers({
    dashboardData: collectorDashboardReducer
});

export default allReducers;