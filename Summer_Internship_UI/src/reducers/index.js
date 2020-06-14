import { combineReducers } from 'redux';
import collectorDashboardReducer from "./collecterDashboardReducer"

const allReducers = combineReducers({
    dashboardData: collectorDashboardReducer
});

export default allReducers;