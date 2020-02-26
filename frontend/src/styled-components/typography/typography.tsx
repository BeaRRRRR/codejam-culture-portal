import React, {FunctionComponent} from 'react';
import { Typography as T } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500
  }
});

/**
 * @component
 * @visibleName
 */

const Typography: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <T variant='h1' component='h2' gutterBottom>
        h1. Heading
      </T>
      <T variant='h2' gutterBottom>
        h2. Heading
      </T>
      <T variant='h3' gutterBottom>
        h3. Heading
      </T>
      <T variant='h4' gutterBottom>
        h4. Heading
      </T>
      <T variant='h5' gutterBottom>
        h5. Heading
      </T>
      <T variant='h6' gutterBottom>
        h6. Heading
      </T>
      <T variant='subtitle1' gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </T>
      <T variant='subtitle2' gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </T>
      <T variant='body1' gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </T>
      <T variant='body2' gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </T>
      <T variant='button' display='block' gutterBottom>
        button text
      </T>
      <T variant='caption' display='block' gutterBottom>
        caption text
      </T>
      <T variant='overline' display='block' gutterBottom>
        overline text
      </T>
    </div>
  );
};

export default Typography;
