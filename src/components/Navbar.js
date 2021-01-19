import React from 'react';
import { Layout, Menu } from 'antd';
import './Navbar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Logout} from '../Redux/actions';

const {Header} = Layout;

class Navbar extends React.Component{
    render(){
        return(
            <Header className='Header'>
                <div className='menu-items'>
                    <div className="logo item">
                        <Link to='/'><img src="icon.jpg" width="60px"/></Link>
                    </div>
                    <div className='menu item' onClick={this.props.toggle}>Menu</div>
                </div>
                <div className='search'>
                    <input type='text' className='search-bar'/>
                </div>
                <div className='nav-items'>
                    <div className='item'>
                        <Link to='/watchlist'>Watch-list</Link>
                    </div>
                    <div className='signup-signin item'>
                        {this.props.currentUser?<a onClick={()=>{this.props.dispatch(Logout(null))}}>Logout</a>:<Link to='/Auth'>signin</Link>}
                    </div>
                </div>
            </Header>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user
});

function mapDispatchToProps(dispatch) {
    return {
      dispatch: dispatch
    };
}

export default  connect(mapStateToProps,mapDispatchToProps)(Navbar);