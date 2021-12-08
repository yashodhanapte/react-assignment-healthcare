import React from 'react'
import './Button.css';

const Button = ({ title = 'Button', handleButtonClick, disabled = false }) => {
    if (disabled) {
        return (
            <div className="button-disabled">{title}</div>
        )
    } else {
        return (
            <div className="button-primary" onClick={handleButtonClick}>{title}</div>
        )
    }
    
}

export default Button
