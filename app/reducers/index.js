import { combineReducers } from 'redux';

import complexReducer from './complex.app.reducer';

const reducers = combineReducers({
    complexReducer: complexReducer
});

export default reducers;