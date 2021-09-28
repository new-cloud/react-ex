import logo from './logo.svg';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,	 //唯一?
	Redirect, //路由重定向
	Route,
	Link,
	NavLink,
	useRouteMatch,
	useParams,
	withRouter //路由守卫
  } from "react-router-dom";
import MyHeader from './components/header';
import Hookzujian from './components/hookzujian';
import Reduxzujina from './components/reduxzujina';
import ReactReduxzujian from './components/reactReduxzujian';
import MyTaber from './components/mytaber';
import Home from './pages/home';
import User from './pages/user/index';
import User2 from './pages/user2';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Button } from 'antd-mobile';
import { Button } from 'antd';

function App(props) {
	// props.history.listen(link => console.log(link));
	let data = {
		name: 'xx'
	}
	return (
		<div className="App">
			{/* <MyHeader headData={data.name}/> */}
			<Switch>
				<Route path="/home" exact component={ Home } />
				<Route path="/user" component={ User } />  {/*查找到第一个user路由 就不会继续向下查找*/}
				<Route path="/user" component={ User2 } />
				{/* 重定向 若是以上都匹配不到 直接跳首页或 其他页 */}
				<Redirect to="/home"/>  {/* from 必须在Switch标签中才能使用 */}
			</Switch>
			{/* <Hookzujian /> */}
			{/* <Reduxzujina /> */}
			{/* <ReactReduxzujian /> */}
		</div>
	);
}

export default withRouter(App);
