import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
  * Progress properties.
  */

export interface ProgressProps {
  color?: 'primary'|'secondary',
  variant?: 'indeterminate'|'buffer'|'query',
}

/**
  * @component
  */

class Progress extends Component <ProgressProps, {}>{
  render () {
    const {color, variant} = this.props;
    return (
      <LinearProgress color={color} variant={variant}/>
    )
  }
}

export default Progress;
