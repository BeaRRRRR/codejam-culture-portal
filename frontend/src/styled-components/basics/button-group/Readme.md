Variants/colors:
```jsx inside Markdown
import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

;<>
<Box display='flex' justifyContent='space-around'>
	<Box bgcolor='background.default' color="text.primary" p={3}>
		<ButtonGroup variant='contained' color='primary'>
			<Button>contained</Button>
			<Button>primary</Button>
			<Button>-</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='contained' color='secondary'>
			<Button>contained</Button>
			<Button>secondary</Button>
			<Button>-</Button>
		</ButtonGroup>
		<p/>
		<ButtonGroup variant='outlined' color='primary'>
			<Button>outlined</Button>
			<Button>primary</Button>
			<Button>-</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='outlined' color='secondary'>
			<Button>outlined</Button>
			<Button>secondary</Button>
			<Button>-</Button>
		</ButtonGroup>
		<p/>
		<ButtonGroup variant='text' color='primary'>
			<Button>text</Button>
			<Button>primary</Button>
			<Button>-</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='text' color='secondary'>
			<Button>text</Button>
			<Button>secondary</Button>
			<Button>-</Button>
		</ButtonGroup>
	</Box>
</Box>
</>
```

Sizes/orientation:
```jsx inside Markdown
import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

;<>
<Box display='flex' justifyContent='space-around'>
	<Box bgcolor='background.default' color="text.primary" p={3}>
		<ButtonGroup variant='contained' size='small' color='secondary' orientation='vertical'>
			<Button>small</Button>
			<Button>-</Button>
			<Button>contained</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='text' color='secondary' orientation='vertical'>
			<Button>medium</Button>
			<Button>-</Button>
			<Button>text</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='contained' size='large' color='primary' orientation='vertical'>
			<Button>large</Button>
			<Button>vertical</Button>
			<Button>contained</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='outlined' color='primary' orientation='vertical'>
			<Button>medium</Button>
			<Button>-</Button>
			<Button>outlined</Button>
		</ButtonGroup>
		<span> </span>
		<ButtonGroup variant='outlined' size='small' color='secondary' orientation='vertical'>
			<Button>small</Button>
			<Button>-</Button>
			<Button>outlined</Button>
		</ButtonGroup>
	</Box>
</Box>
</>
```
