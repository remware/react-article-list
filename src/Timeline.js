import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {refreshing: false}
    }

    // bound refresh button
    refresh() {
        this.setState({refreshing: true});
    }

    // callBack component
    onComponentRefresh() {
        this.setState({refreshing: false});
    }

    componentWillReceiveProps(nextProps) {
        // Check to see if the requestRefresh prop has changed
        if (nextProps.requestRefresh !== this.props.requestRefresh) {
        this.setState({loading: true}, this.updateData);
        }
    }

    // fetch events
    fetchEvents() {
        return true
    }

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

            const {refreshing} = this.state;

        return ( 
            <div className='notificationsFrame'>
                <div className='panel'>
                    <Header title="Github activity"/>
                    <Content onComponentRefresh={this.onComponentRefresh.bind(this)}
                             requestRefresh={refreshing}
                             fetchData={this.fetchEvents}
                    activities={activities}/>
                    <Footer> 
                        <button onClick={this.refresh.bind(this)}> 
                            <i className="fa fa-refresh" /> Refresh
                        </button>
                    </Footer>
                </div>
            </div>
        );
    }
}

export default Timeline;

