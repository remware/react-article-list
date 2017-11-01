import React from 'react';
import './Timeline.css';

class Content extends React.Component {

    render() {
        const {activities} = this.props; // ES6 destructuring
        
        return (
            <div className="content">
                <div className="line"></div>

                {activities.map((activity) => {
                    return (
                    <div className="item">
                        <div className="avatar"> {activity.user.name} </div>
                        <span className="time"> {activity.timestamp} </span>
                        <p> {activity.text} </p>
                        <div className="commentCount"> {activity.comments.length} </div>
                    </div>
                     ); } )
                }
            </div>
            );
        } 
}
export default Content;
