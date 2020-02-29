import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

/**
	* SearchField properties.
	*/
export interface SearchFieldProps {
	variant?: 'outlined'|'standard'|'filled';
	label?: string;
	id?: string;
	color: 'primary'|'secondary';
	type: string;
	onChange: any;
}

/**
	* @component
	*/

class SearchField extends Component<SearchFieldProps|any, {}> {
	render () {
		const { id, label, variant, color, onChange } = this.props;
		return (
		<TextField id={id} label={label} type='search' variant={variant} color={color} onChange={onChange}/>
	); }
}

export default SearchField;
