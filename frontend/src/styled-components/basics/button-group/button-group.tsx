import React, { Component } from 'react';
import { ButtonGroup as DefaultButtonGroup } from '@material-ui/core';

/**
  * ButtonGroup properties.
  */
 export interface ButtonGroupProps {
  variant?: 'contained'|'outlined'|'text',
  color?: 'primary'|'secondary',
  size?: 'small'|'medium'|'large',
  orientation?: 'vertical'
  | 'horizontal',
  disabled?: boolean,
  children?: Node,
}

/**
  * @component
  */

class ButtonGroup extends Component<ButtonGroupProps, {}> {
  render () {
    const { variant, color, children, size, disabled, orientation } = this.props;
    return (
      <DefaultButtonGroup variant={variant} color={color} size={size} disabled={disabled} orientation={orientation}>
        {children}
      </DefaultButtonGroup>
    )
  };
};


export default ButtonGroup;