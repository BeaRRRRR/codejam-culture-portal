```jsx inside Markdown
import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
;<>
<Paper><Typography>default</Typography></Paper>
<p/>
<Paper square><Typography>square</Typography></Paper>
<p/>
<Paper variant='outlined'><Typography>variant='outlined'</Typography></Paper>
<p/>
<Paper elevation={3}><Typography>elevation={`{3}`}</Typography></Paper>
<p/>
<Paper elevation={10}><Typography>elevation={`{10}`}</Typography></Paper>
</>
```
