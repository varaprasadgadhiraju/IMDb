import React from 'react';
import { connect } from 'react-redux';
import {Login} from '../Redux/actions';
import ls from "local-storage";
import {Link,Redirect} from "react-router-dom";
import "./Auth.css"

//Signin component for user signin 
class Auth extends React.Component{
    state={
        email:'',
        password:''
    }
    login=(e)=>{
        e.preventDefault() //prevents from reloading of page!
        let data=JSON.parse(ls.get("userdata"))
       for(let i=0;i<data.length;i++){
       if(data[i].email==this.state.email){
          if(data[i].password==this.state.password){
            alert("signed in successfully")
            this.setState({name:"",password:""})
            this.props.dispatch(Login(this.state.email))
          }else{
            alert("incorrect password")
            this.setState({name:"",password:""}) 
          }
       }
     }
        
    }
    render(){
        if(this.props.currentUser){
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div className="signin-details">
            <form className="form">
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Email</p>
                <input type='text' value={this.state.email} onChange={e=>{this.setState({email:e.target.value})}}/></div>
                <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                <p className="label">Password</p>
                <input type='password' value={this.state.password} onChange={e=>{this.setState({password:e.target.value})}}/></div>
                {this.props.currentUser?'':<button className="Signin-button" onClick={this.login}>Login</button>}
               <Link to="/Signup">{this.props.currentUser?'':<button className="Signin-button"  style={{marginRight:"0px"}} onClick={()=>{}}>Sign up</button>}</Link>
               </form>
            </div>
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

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);

export default AuthContainer;