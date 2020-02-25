```jsx inside Markdown
import React, { Component } from 'react';
import {Typography, Box} from '@material-ui/core';
;<>
<Box bgcolor='background.default' color="text.primary" p={2}>
	<Typography variant='h5'>outlined:</Typography>
	<SearchField label='primary' color='primary' variant='outlined'/>
	<span> </span>
	<SearchField label='secondary' color='secondary' variant='outlined'/>
	<p/>
	<Typography variant='h5'>standard:</Typography>
	<SearchField label='primary' color='primary'/>
	<span> </span>
	<SearchField label='secondary' color='secondary'/>
	<p/>
	<Typography variant='h5'>filled:</Typography>
	<SearchField label='primary' color='primary' variant='filled'/>
	<span> </span>
	<SearchField label='secondary' color='secondary' variant='filled'/>
</Box>
</>
```
