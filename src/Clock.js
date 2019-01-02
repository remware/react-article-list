import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getTime();
    }

    componentDidMount() {
        this.setTimer();
    }

    componentWillUnmount() {
        if (this.timeout) {
        clearTimeout(this.timeout);
        }
    }

    //
    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    //
    updateClock() {
        const currentTime = new Date();
        this.setState({
            currentTime: currentTime
        },  this.setTimer());
       
    }

    getTime() {
        const currentTime = new Date();
        return {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        }
    }

    render() {
        const {hours ,  minutes, seconds,  ampm  } = this.state;

        return (
            <div className="clock"> 
                {
                    hours == 0 ? 12 :
                    ( hours > 12 ) ? hours - 12 : hours
                }: {  minutes > 9 ? minutes : `0${minutes}`}: { seconds > 9 ? seconds : `0${seconds}` } 
                { ampm }
            </div>
        )
    }
}

export default Clock;

// Clock state IF
Clock.propTypes = {
    // key is the name of the prop and value is the PropType
    title: PropTypes.string,
    count: PropTypes.number,
    isOn: PropTypes.bool,
    onDisplay: PropTypes.func,
    symbol: PropTypes.symbol,
    user: PropTypes.object,
    name: PropTypes.node,
    counts: PropTypes.array,
    users: PropTypes.arrayOf(PropTypes.object),
    alarmColor: PropTypes.oneOf(['red', 'blue']),
    description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Title),   
    ]),
    basicObject: PropTypes.object,
    numbers: PropTypes
    .objectOf(PropTypes.numbers),
    messages: PropTypes
    .instanceOf(Message),
    contactList: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    displayEle: PropTypes.element
    })
    }