import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';


import './ErrorIndicator.scss';

const ErrorIndicator: React.FC = () => {
  return (
    <Alert className="error-indicator" severity="error">
      <AlertTitle>Error</AlertTitle>
      Something has gone wrong
    </Alert>
  );
};

export default ErrorIndicator;