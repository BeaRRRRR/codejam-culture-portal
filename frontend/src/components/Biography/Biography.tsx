import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { LifeEvent } from '../../store/types';

import './Biography.scss';

interface BiographyProps {
	lifeEvents: LifeEvent[];
	t: (namespace: string) => string;
}

const Biography: React.FC<BiographyProps> = props => {
	const { lifeEvents, t } = props;

	return (
		<Box className='biography' component='section'>
			<Typography className={'biography__heading'} variant='h3' component='h2' gutterBottom>
				{t('timeLine')}
			</Typography>
			<Paper className={'biography__paper'}>
				<VerticalTimeline>
					{lifeEvents.map(event => (
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							contentStyle={{ background: '#bcaaa4', color: '#000' }}
							contentArrowStyle={{ borderRight: '7px solid	#bcaaa4' }}
							iconStyle={{ background: '#bcaaa4', color: '#303030' }}
							icon={<StarIcon />}
							key={event.summary}
						>
							<Typography variant='body1' component='p'>
								{event.summary}
							</Typography>
							<Typography variant='h5'>
								{event.eventDate.slice(0, 4)}
							</Typography>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</Paper>
		</Box>
	);
};

export default Biography;
