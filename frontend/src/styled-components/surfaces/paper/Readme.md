```jsx inside Markdown
import React, { Component } from 'react';
import {Typography, Box} from '@material-ui/core';
;<>
<Box bgcolor='background.default' color="text.primary" p={2}>
	<Paper><Typography align='center'>default</Typography></Paper>
	<p/>
	<Paper square><Typography align='center'>square</Typography></Paper>
	<p/>
	<Paper variant='outlined'><Typography align='center'>variant='outlined'</Typography></Paper>
	<p/>
	<Paper elevation={3}><Typography align='center'>elevation={`{3}`}</Typography></Paper>
	<p/>
	<Paper elevation={10}><Typography align='center'>elevation={`{10}`}</Typography></Paper>
</Box>
</>
```
