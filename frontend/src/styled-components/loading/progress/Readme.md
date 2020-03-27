Linear:

```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box bgcolor='background.default' color="text.primary" p={2}>
	<Progress/>
	<p/>
	<Progress variant='query' color='secondary'/>
</Box>
</>
```

Circular:
```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box display='flex' justifyContent='space-around'>
	<Box bgcolor='background.default' color="text.primary" p={3}>
		<Progress type='circular'/>
		<span> </span>
		<Progress type='circular' color='secondary'/>
	</Box>
</Box>
</>
```
