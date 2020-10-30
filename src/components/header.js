import React, { Component } from 'react';
import './header.css';

class home extends Component {
    render() {
        return (
            <div>
                我是页头组件
                <div style={{width:'100px',height:'100px'}} className="div1"></div>
            </div>
        );
    }
}

export default home;