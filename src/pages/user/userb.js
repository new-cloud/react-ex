import React, { Component } from 'react';

class userb extends Component {
    componentDidMount(){
        //介绍路由传递过来的参数
        console.log(this.props.location.query);
    }
    render() {
        return (
            <div>
                <h1>我是user页面二级路由B</h1>
            </div>
        );
    }
}

export default userb;