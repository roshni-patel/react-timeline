import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (timelineEvents) => {
  const eventComponents = timelineEvents.events.map((event, i) => {
    return (
      <TimelineEvent key={i} person={ event.person } timeStamp={ event.timeStamp } status={event.status} />
    ); 
});

return (
  <div className='timeline'>{eventComponents}</div>
  );
};
export default Timeline;