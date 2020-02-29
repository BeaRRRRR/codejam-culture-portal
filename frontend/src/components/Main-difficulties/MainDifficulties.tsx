import React from 'react';
import { Box, Typography } from '@material-ui/core';
import {withTranslation} from 'react-i18next';

import DifficultyList from '../DifficultyList';

interface IMainDifficulties {
	t(namespace: string): string;
}

function MainDifficulties({t}: IMainDifficulties) {
	return (
		<Box component='section' className='main-difficulties'>
			<Typography variant='h4' component='h2'>
				{t('mainDifficulties')}
			</Typography>
			<DifficultyList
				difficulties={[
					{
						name: 'Technical difficulties',
						description:
							'During the implementation, the team members met some moments that required significant time and effort. This includes creating a project frame, implementing an Redux on a Typescript, \n' +
							'setting up of material-ui and styleguidist and site deploying on heroku.'
					},
					{
						name: 'Merge conflicts',
						description:
							'As is inevitable in any team work, we had to face a large number of merge conflicts. When resolving them, due to lack of testing, we had to fix several bugs and errors.'
					}
				]}
			/>
		</Box>
	);
}

export default withTranslation('common')(MainDifficulties);
