import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import eye from './img/eye.svg';

// Set custom styles for TextField
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#3a344e'
    },
    '& .MuiOutlinedInput-root': {
      width: '549.9px',
      height: '51px',
      opacity: '0.58',
      borderRadius: '3px',
      backgroundColor: '#f8f8f8',
      '& fieldset': {
        borderColor: '#707070'
      },
      '&:hover fieldset': {
        borderColor: '#707070'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3a344e',
        opacity: '1'
      }
    }
  }
})(TextField);

export default function InputField(props) {
  const [visible, setVisible] = useState(false);
  // Eye icon to show password
  const Eye = () => {
    const showPassword = () => {
      setVisible(!visible);
    };
    return (
      <div>
        <img
          src={eye}
          className="eye"
          onClick={() => showPassword()}
          onKeyPress={showPassword}
          alt="Eye"
        />
      </div>
    );
  };
  const { type, placeholder, variant, label, value, onChange } = props;
  return (
    <div>
      <CssTextField
        type={visible ? 'text' : type}
        placeholder={placeholder || 'Enter your email'}
        className="input"
        variant={variant || 'outlined'}
        label={label || 'Email'}
        value={value || null}
        onChange={onChange || null}
      />
      {type === 'password' ? <Eye /> : null}
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
