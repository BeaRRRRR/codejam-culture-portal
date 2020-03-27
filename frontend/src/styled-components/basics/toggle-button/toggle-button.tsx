import React from 'react';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab/';

/**
	* ToggleButtons properties.
	*/
export interface ToggleButtonsProps {
	props: {};
}

/**
	* @component
	* @visibleName ToggleButtons
	*/

const ToggleButtons = ({}: ToggleButtonsProps) => {
	const [alignment, setAlignment] = React.useState<string | null>('3');

	const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
		event.preventDefault();
		if (newAlignment !== null) {
			setAlignment(newAlignment);
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
			value={alignment} exclusive
			onChange={handleAlignment}>
				{buttons}
		</ToggleButtonGroup>
	);
};

export default ToggleButtons;
