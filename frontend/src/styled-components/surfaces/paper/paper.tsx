import React, { Component } from 'react';
import {Paper as DefaultPaper} from '@material-ui/core/';

/**
  * Paper properties.
  */
 export interface PaperProps {
   children?: JSX.Element|string,
   variant?: 'outlined'|'elevation',
   elevation: number,
   square?: boolean
 }

/**
  * @component
  */
 
class Paper extends Component<PaperProps, {}>{
  render () {
    const {children, variant, elevation, square} = this.props;
    return (
      <DefaultPaper variant={variant} elevation={elevation} square={square}>{children}</DefaultPaper>
    )
  }
}

export default Paper;
