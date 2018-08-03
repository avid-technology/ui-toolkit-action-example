import React from 'react';
import {connect} from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';
import DialogBox from '../components/DialogBox';

class PaneContainer extends React.Component {

    render() {
        return (
            <div>
                <DialogBox
                    message={'Example message'}
                    title={'Action-example'}
                    type={'ok'}
                    isShown={this.props.isShown}
                    okClickHandler={() => {
                        this.props.exampleAction(false);
                    }}
                    isErrorIconShown={false}
                    height={'auto'}
                    width={400}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isShown: state.example.isShown,
});

const mapDispatchToProps = {
    exampleAction: makeAction(actionTypes.EXAMPLE_ACTION),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaneContainer);
