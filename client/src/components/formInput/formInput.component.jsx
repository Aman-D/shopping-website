import React from 'react';

import './formInput.styles.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {

            label ?
                (<label className={`${value.length ? 'shrink' : ''} form-input-label `} >
                    {label}
                </label>)
                : null
        }
    </div >
)

export default FormInput;