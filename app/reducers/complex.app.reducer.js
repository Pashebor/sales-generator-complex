import {SHOW_OFFER} from '../actions/index';

const initialState = {
    show: false,
    index: null,
    outSide: false
};

const complexReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case SHOW_OFFER:
            return Object.assign({}, state, {index: action.btn});
        default: return state;
    }
};

export default complexReducer;
