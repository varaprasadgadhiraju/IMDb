import React from 'react';
import { Layout, Menu } from 'antd';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const {Sider} = Layout;

class Sidebar extends React.Component{
    render(){
        return(
            <Sider trigger={null} collapsible collapsedWidth={0} collapsed={this.props.collapsed}>
                <Menu>
                <Menu.Item key="1" className='collapsed-item'>
                    Watch-list
                </Menu.Item>
                <Menu.Item key="2" className='collapsed-item'>
                    signin
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/list/topmovies'>Top Movies</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/list/popularmovies'>Popular Movies</Link>
                </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;