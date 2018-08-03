import React from 'react';
import ReactDOM from 'react-dom';
import DialogBoxContent from './DialogBoxContent/DialogBoxContent';
import PropTypes from 'prop-types';
import {DIALOG_BOX_CLASS, DialogBoxConsts} from './DialogBoxConsts';

export default class DialogBox extends React.Component {

    componentDidMount() {
        if (this.props.isShown) {
            this.showDialogBox();
        }
    }

    componentWillUnmount() {
        this.hideDialogBox();
    }

    showDialogBox() {
        const element = document.createElement('div');

        element.className = DIALOG_BOX_CLASS;
        element.style.height = '100%';

        ReactDOM.render(<DialogBoxContent {...this.props}/>, element);
        document.body.appendChild(element);
    }

    hideDialogBox() {
        const container = document.getElementsByClassName(DIALOG_BOX_CLASS)[0];

        if (container) {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        }
    }

    componentDidUpdate() {
        this.props.isShown ? this.showDialogBox() : this.hideDialogBox();
    }

    render() {
        return null;
    }

}

export const DialogBoxProps = {
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

    yesClickHandler: PropTypes.func,
    noClickHandler: PropTypes.func,
    okClickHandler: PropTypes.func,
    type: PropTypes.oneOf(Object.values(DialogBoxConsts.TYPE)),
    isShown: PropTypes.bool,
    isErrorIconShown: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

DialogBox.propTypes = DialogBoxProps;

DialogBox.defaultProps = {
    isShown: true,
    errorIcon: false,
    height: 'auto',
    width: 360,
    yesClickHandler: () => { },
    noClickHandler: () => { },
    okClickHandler: () => { },
    type: DialogBoxConsts.TYPE.OK
};

