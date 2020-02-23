It doesn't work here, you can see how it work at https://material-ui.com/ru/components/backdrop/:

```jsx inside Markdown
import React, { Component } from 'react';
import Button from 'rsg-example/basics/button';
import Progress from '../progress';
const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  setOpen(!open);
};

;<>
  <Button variant="contained" color="secondary" onClick={handleToggle}>
    Show backdrop
  </Button>
  
  <Backdrop open={open} onClick={handleClose}>
    <Progress type='circular'></Progress>
  </Backdrop>
</>

```
