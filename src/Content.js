import React from 'react';
import './Timeline.css';
import ActivityItem from './ActivityItem';

class Content extends React.Component {

    render() {
        const {activities} = this.props; // ES6 destructuring
        
        return (
            <div className="content">
                <div className="line"></div>

                {activities.map((activity) => ( <ActivityItem activity={activity} />))}
            </div>
            );
        } 
}
export default Content;
