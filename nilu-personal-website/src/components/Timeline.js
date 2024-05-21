import React from 'react';
import '../styles/App.css';

const Timeline = ({ events }) => {
    return (
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.logo}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Timeline;
