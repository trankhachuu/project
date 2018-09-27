import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Frames/Nav';
import Content from '../ContentHOme/Content';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                
                <Content></Content>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp }
})(Home);