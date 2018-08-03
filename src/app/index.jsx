import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import rootSaga from './redux/saga/index';
import PaneContainer from './containers/MainPaneContainer';
import {store, sagaMiddleware} from '../store';
import 'cloudux-bootstrap/dist/css/cloudux.min.css';

export default class ApplicationContainer {
    constructor() {
        sagaMiddleware.run(rootSaga);
    }

    render(element) {
        ReactDOM.render(
            <Provider store={store}>
                <PaneContainer/>
            </Provider>,
            element
        );
    }
}
