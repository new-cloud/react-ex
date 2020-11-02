import React, { Component } from 'react';
import { store } from '../redux/store';
class reduxzujina extends Component {
    componentDidMount(){
        // console.log('我是redux的数据',store.getState())
        store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    render() {
        return (
            <div>
                <p>我是redux组件</p>
                <p>{ store.getState() }</p>
                <button onClick={ () => store.dispatch({ type: 'add', data: 2 }) }>reduxAdd</button>
            </div>
        );
    }
}

export default reduxzujina;