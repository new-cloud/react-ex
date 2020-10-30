import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import usera from './usera';
import userb from './userb';

class user extends Component {
    render() {
        return (
            <div>
                我是 user 用户页面
                <br/>
                <Link to="/user/usera">跳转user页面二级路由a</Link>
                <br/>
                <Link to={ { 
                    pathname: '/user/userb',
                    query: {name: 'xx'}
                 } }>跳转user页面二级路由b</Link>
                <Route path="/user/usera" component={usera} />
                <Route path="/user/userb" component={userb} />
            </div>
        );
    }
}

export default user;