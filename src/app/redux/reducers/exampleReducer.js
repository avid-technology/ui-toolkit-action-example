import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    isShown: false,
};

const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.EXAMPLE_ACTION_SUCCESS: {
            return {
                ...state,
                isShown: action.payload,
            };
        }
        case actionTypes.EXAMPLE_ACTION_FAILED: {
            return {
                ...state,
                isShown: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
