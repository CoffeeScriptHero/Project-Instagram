import React, {Component} from "react";
import './button.scss'


class Button extends Component {
    render() {
        const {text,backgroundColor,onClick} = this.props
        return (
            <button style={{backgroundColor:backgroundColor}} onClick={onClick} className={'button'}>{text}</button>
        );
    }
}

export default Button