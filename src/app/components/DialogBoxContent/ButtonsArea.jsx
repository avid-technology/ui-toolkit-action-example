import React from 'react';

export default class ButtonsArea extends React.Component {

    render() {
        return (
            <div className="cux-dialogBox-footer">
                <button style={{'background-color':'#464854'}} className="cux-btn" type="button" onClick={this.props.okClickHandler}>Close window</button>
            </div>
        )
    }

}
