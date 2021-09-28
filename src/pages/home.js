import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class home extends Component {
    constructor(props) {
        super(props)
        this.add = this.add.bind(this);
    }
    state = {
        collapsed: false,
    };
    
    toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    add() {
        console.log(1111)
    }
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider collapsed={this.state.collapsed}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      mode="inline"
                      theme="dark"
                    >
                      <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                      </Menu.Item>
                      <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                      </Menu.Item>
                      <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Option 3
                      </Menu.Item>
                      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
						{[5, 6].map(item => {
							return <Menu.Item key={item}>Option 1</Menu.Item>
						})}
                      </SubMenu>
                      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                          <Menu.Item key="11">Option 11</Menu.Item>
                          <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                      </SubMenu>
                    </Menu>
                </Sider>
                <Content>
                	<Button type="primary" onClick={this.add}>Primary Button</Button>
                </Content>
            </Layout>
        );
    }
}

export default home;