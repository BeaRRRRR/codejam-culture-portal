import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';

import { LifeEvent } from '../../store/types';

import './Biography.scss';

interface BiographyProps {
	lifeEvents: LifeEvent[];
}

const Biography: React.FC<BiographyProps> = (props) => {
	const { lifeEvents } = props;

	return (
		<div className='biography'>
			<h2 className='biography-title'>Timeline</h2>
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
							<h3 className='vertical-timeline-element-title'>{event.summary}</h3>
							<h4>{event.eventDate.slice(0, 4)}</h4>
						</VerticalTimelineElement>
					))
				}
			</VerticalTimeline>
		</div>
	);
};

export default Biography;
