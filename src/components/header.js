import React, { Component } from 'react';
import './header.scss';

class home extends Component {
    render() {
        return (
            <div className="headers">
                <h2 className="P1">我是页头组件</h2>
                <div style={{width:'100px',height:'100px'}} className="div1"></div>
            </div>
        );
    }
}

export default home;