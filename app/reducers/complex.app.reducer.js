import {GET_MODAL_FORM} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false
};

const complexReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case GET_MODAL_FORM:
            return Object.assign({}, state, {modalShow: action.show});
        default: return state;
    }
};

export default complexReducer;