import React, { Component } from 'react';
import { store } from '../redux/store';
class reduxzujina extends Component {
    componentDidMount(){
        console.log(store.getState())
    }
    render() {
        return (
            <div>
                <p>我是redux组件</p>
            </div>
        );
    }
}

export default reduxzujina;