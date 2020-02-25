import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

import {
	VerticalTimeline, VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { LifeEvent } from '../../store/types';

import './Biography.scss';

interface BiographyProps {
	lifeEvents: LifeEvent[];
}

const Biography: React.FC<BiographyProps> = (props) => {
	const { lifeEvents } = props;

	return (
		<Box className='biography'>
			<Typography variant='h4' component='h3'>
				Timeline
			</Typography>
			<VerticalTimeline>
				{
					lifeEvents.map((event) => (
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid	rgb(33, 150, 243)' }}
							iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
							icon={<StarIcon />}
							key={event.summary}
						>
							<Typography variant='h6' component='h4'>
								{event.summary}
							</Typography>
							<Typography variant='subtitle1'>
								{event.eventDate.slice(0, 4)}
							</Typography>
						</VerticalTimelineElement>
					))
				}
			</VerticalTimeline>
		</Box>
	);
};

export default Biography;
