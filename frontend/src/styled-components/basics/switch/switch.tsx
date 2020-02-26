import React, { Component } from 'react';
import {Switch as DefaultSwitch} from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/**
  * Switch properties.
  */
export interface SwitchProps {
  color?: 'primary'|'secondary';
  size?: 'small'|'medium';
  value: string;
  label?: string;
  labelPlacement?: 'top'|'end'|'bottom'|'start';
  checked?: boolean;
  onChange?: any;
}

/**
  * @component
  */

class Switch extends Component<SwitchProps, {}> {
  render () {
    const {checked, size, color, onChange, value, label, labelPlacement} = this.props;
    return (
      <FormControlLabel
        value={value}
        control={<DefaultSwitch color={color} size={size} checked={checked} onChange={onChange} />}
        label={label}
        labelPlacement={labelPlacement}
      />
    );
  }
}

export default Switch;
