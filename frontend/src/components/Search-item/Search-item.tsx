import React from 'react';

import {
	Typography,
	ListItem,
	ListItemProps,
	Box
} from '@material-ui/core';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

interface SearchItemProps {
	id: string;
	name: string;
	birthPlace: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ id, name, birthPlace }) => {
	const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
		return <ListItem button component='a' {...props} />;
	};

	return (
			<ListItemLink href={`/#/architect/${id}`}>
				<Box
					minHeight={50}
					width='100%'
					display='flex'
					flexDirection='column'
					alignItems='center'
				>
					<Typography>{name.toUpperCase()}</Typography>
					<Box display='flex' flexDirection='row' alignItems='center'>
						<HomeRoundedIcon color='secondary' />
						<Typography variant='body2' color='textSecondary'>
							{birthPlace}
						</Typography>
					</Box>
				</Box>
			</ListItemLink>
	);
};

export default SearchItem;
