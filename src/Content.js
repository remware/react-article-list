import React from 'react';
import './Timeline.css';
import ActivityItem from './ActivityItem';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    // componentWillMount() {    this.setState({activities: data});  }

    // load from gitHub
    componentWillReceiveProps(nextProps) {
       // check for request Refresh prop
       if (nextProps.requestRefresh !== this.props.requestRefresh) {
           this.setState({loading: true}, this.updateData);
       }
    }
    
    // render
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
