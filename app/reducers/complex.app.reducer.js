import {SHOW_OFFER} from '../actions/index';

const initialState = {
    show: false,
    index: null,
    outSide: false
};

const complexReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case SHOW_OFFER:
            console.log(state);
            return Object.assign({}, state, {show: action.show, index: action.btn});
        default: return state;
    }
};

export default complexReducer;