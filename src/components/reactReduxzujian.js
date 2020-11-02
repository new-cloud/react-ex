import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(
    state => ({
        num: state
    }),
    { 
        add: ()=> ({type:'add'})
    }
)(
    class reactReduxzujian extends Component {
        render() {
            console.log(this.props)
            const { num, add } = this.props;
            return (
                <div>
                    <p>{ num }</p>
                    <button onClick={add}>reactReduxAdd</button>
                </div>
            );
        }
    }
)