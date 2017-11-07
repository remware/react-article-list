import React from 'react';
import Header from './Header';
import Content from './Content';

class Timeline extends React.Component {
  render() {
    const activities = [
        {
            timestamp: new Date().getTime(),
            text: "Is a disorder",
            user: { id: 1, name: 'Nate' },
            comments: [{ from: 'Ari', text: 'Me too!' }]
        },
        {
            timestamp: new Date().getTime(),
            text: "Is part of live",
            user: {id: 2, name: 'Ari'},
            comments: [{ from: 'Nate', text: 'I am so jealous' }]
        },
        ];

    return ( 
        <div>
            <Header title="Comments"/>
            <Content activities={activities}/>
        </div>
    );
  }
}
export default Timeline;

