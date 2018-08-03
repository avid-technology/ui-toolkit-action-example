import actionTypes from './redux/actions/actionTypes';
import {store} from '../store';

const action = {
    id: 'user.action',

    getText() {
        return 'Example Action';
    },

    isVisible() {
        return true;
    },

    handler({selection, component}) {
        store.dispatch({type: actionTypes.EXAMPLE_ACTION, payload: true});
    },
};

export default action;
