import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, google, ...otherProps }) => (
    <button className={`${google ? 'google' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;