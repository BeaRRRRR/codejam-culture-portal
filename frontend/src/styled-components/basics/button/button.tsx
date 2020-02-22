import React, { Component } from 'react';
import {Button as DefaultButton} from '@material-ui/core';

/**
  * Button properties.
  */
export interface ButtonProps {
  variant: 'contained'|'outlined',
  color?: 'primary'|'secondary',
  size?: 'small'|'medium'|'large',
  disabled?: boolean,
  startIcon?: string,
  endIcon?: string,
  children?: JSX.Element|String,
}

/**
  * @component
  */

class Button extends Component<ButtonProps, {}> {
  render () {
    const { variant, color, children, size, disabled, startIcon, endIcon } = this.props;
    return (
    <DefaultButton variant={variant} color={color} size={size} disabled={disabled} startIcon={startIcon} endIcon={endIcon}>
      {children}
    </DefaultButton>
  )};
};

export default Button;
