import React from 'react';
import PropTypes from 'prop-types';
import './buttonComponent.css';

const ButtonComponent = (props) => {
    const {
        onClick,
        disabled,
        style,
        children,
        loading,
        content,
        className,
    } = props;

    return (
        <button 
            className={`myTextButton ${className}`}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    )
}

ButtonComponent.defaultProps = {
    disabled: false,
    style: {},
    children: '',
    loading: false,
    content: '',
    className: '',
}

ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.string,
    loading: PropTypes.bool,
    content: PropTypes.string,
    className: PropTypes.string,
}

export default ButtonComponent;
