Views:
```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box display='flex' justifyContent='space-around'>
	<Box bgcolor='background.default' color="text.primary" p={3} >
		<Button variant="contained" color="primary">Primary</Button>
		<span> </span>
		<Button variant="contained" color="secondary">Secondary</Button>
		<span> </span>
		<Button variant="contained" disabled>Disabled</Button>
		<span> </span>
		<Button variant="outlined" color="primary">Outlined (P)</Button>
		<span> </span>
		<Button variant="outlined" color="secondary">Outlined (S)</Button>
	</Box>
</Box>
</>
```

Sizes:
```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box display='flex' justifyContent='space-around'>
	<Box bgcolor='background.default' color="text.primary" p={3}>
		<Button variant="contained" color="primary" size="small">Small</Button>
		<span> </span>
		<Button variant="contained" color="primary" size="medium">Medium</Button>
		<span> </span>
		<Button variant="contained" color="primary" size="large">Large</Button>
	</Box>
</Box>
</>
```
