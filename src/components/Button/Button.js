import React from 'react';
import './Button.scss'
import PropTypes from 'prop-types';

const Button = ({classes, text}) => {
    return (
        <button className={classes}>
            {text}
        </button>
    );
}

Button.defaultProps = {
    classes: 'btn',
    text: ''

};

Button.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.node

};


export default Button;