import React, { Component } from 'react';
import { Backdrop as DefaultBackdrop} from '@material-ui/core';

/**
  * Backdrop properties.
  */

export interface BackdropProps {
  /**backdrop is opened using this property */
  open: boolean,
  invisible?: boolean,
  transitionDuration?: number| {
    appear?: number,
    enter?: number,
    exit?: number
  },
  children?: JSX.Element|string,
}

/**
  * @component
  */

class Backdrop extends Component <BackdropProps, {}>{
  render () {
    const {children, invisible, open, transitionDuration} = this.props;
    return (
      <DefaultBackdrop 
        invisible={invisible} 
        open={open}
        transitionDuration={transitionDuration}>
        {children}
      </DefaultBackdrop>
    )
  }
}

export default Backdrop;
