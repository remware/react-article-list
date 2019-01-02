import React from 'react';
import './Timeline.css';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>
                <span className="title">
                    {this.props.title}
                </span>
                <input type="text" className="searchInput" placeholder="Search ..."/>
                <div className="fa fa-search searchIcon"></div>
            </div>
            );} 
}

export default Header;

Header.defaultProps = {
    title: PropTypes.string
}