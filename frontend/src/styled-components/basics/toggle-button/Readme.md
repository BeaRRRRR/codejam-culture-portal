Variants/colors:
```jsx inside Markdown
import React from 'react';
import { Box } from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab/';

const ToggleButtons = () => {
	const [someState, setSomeState] = React.useState('3');

	const handleSomeState = (event, newSomeState) => {
    if (newSomeState !== null) {
      setSomeState(newSomeState);
    }
	};

	const buttons = [
		{value: '1', content: '1'},
		{value: '2', content: '2'},
		{value: '3', content: '3'}
	].map(({value, content}) => {
		return (
			<ToggleButton value={value}>
				{content}
			</ToggleButton>
		);
	});

	return (
		<ToggleButtonGroup
			value={someState} exclusive
			onChange={handleSomeState}>
				{buttons}
		</ToggleButtonGroup>
	);
};

;<>
<Box display='flex' justifyContent='space-around'>
	<Box bgcolor='background.default' color="text.primary" p={2}>
		<ToggleButtons />
	</Box>
</Box>
</>
```
