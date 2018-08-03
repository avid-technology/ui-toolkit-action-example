import React from 'react';
import ShadowBox from './ShadowBox';
import {DialogBoxProps} from '../DialogBox';
import ButtonsArea from './ButtonsArea';


export default class DialogBoxContent extends React.Component {

    render() {

        if (!this.props.isShown)
            return null;

        return <div className="cux-dialogBox-wrapper">
            <div className="cux-dialogBox"
                 style={{
                     width: this.props.width,
                     height: this.props.height
                 }}>
                <div className="cux-dialogBox-header">
                    <p className="cux-dialogBox-title">{this.props.title}</p>

                </div>

                <div className="cux-dialogBox-content">
                    {this.props.isErrorIconShown && <span className="cux-error-icon'"/>}
                    <p className="cux-dialogBox-message'">{this.props.message}</p>
                </div>
                <ButtonsArea {...this.props}/>
            </div>
            <ShadowBox/>
        </div>;
    }
}

DialogBoxContent.propTypes = DialogBoxProps;



