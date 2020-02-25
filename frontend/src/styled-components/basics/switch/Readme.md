Primary and secondary(default) colors:
```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box bgcolor='background.default' color="text.primary" p={2}>
	<Switch value='primary' color='primary' checked/>
	<Switch value='secondary' checked/>
</Box>
</>
```

Label positions:
```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box bgcolor='background.default' color="text.primary" p={2}>
  <Switch value='1' label='start' labelPlacement='start' color='primary' />
	<Switch value='2' label='top' labelPlacement='top' checked />
	<Switch value='3' label='bottom' labelPlacement='bottom' />
	<Switch value='4' label='end' labelPlacement='end' color='primary' checked />
</Box>
</>
```

Sizes:
```jsx inside Markdown
import { Box } from '@material-ui/core';
;<>
<Box bgcolor='background.default' color="text.primary" p={2}>
	<Switch value='small' label='small' labelPlacement='top' size='small' />
	<Switch value='medium' label='medium' labelPlacement='top' size='medium' />
</Box>
</>
```
