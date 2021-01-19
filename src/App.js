import './App.css';
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import 'antd/dist/antd.css';
import Home from "./components/Home";
import {BrowserRouter,Redirect,Route} from 'react-router-dom';
import DataList from './components/DataList';
import WatchList from './components/WatchList';
import {connect} from 'react-redux';
import Auth from './components/Auth';
import Signup from './components/Signup';

const { Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render(){
    return (
      <Layout>
        <BrowserRouter>
        <Sidebar collapsed={this.state.collapsed}/>
        <Layout>
          <Navbar toggle={this.toggle}/>
          <Content>
              <Route exact path='/' component={Home}/>
              <Route path='/list/:type' component={DataList}/>
              <Route exact path='/Auth' component={Auth}/>
              <Route exact path="/Signup" component={Signup}/>
             <PrivateRoute path='/watchlist' isSigned={this.props.currentUser?true:false} component={WatchList} />

          </Content>
        </Layout>
        </BrowserRouter>
      </Layout>
    );
  }
}

const PrivateRoute = (props)=>{
  return (
    <Route 
      exact={props.exact}
      path={props.path}
      render={()=>{
        if(props.isSigned){
          return <props.component/>
        }else{
          return <Redirect to='/Auth'/>
        }
      }}
    />
  )
}

const mapStatetoProps = (state) => {
  return { currentUser:state.user }
}
export default connect(mapStatetoProps)(App);
