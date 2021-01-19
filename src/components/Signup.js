import React from "react"
import ls from "local-storage"
import { Redirect } from "react-router-dom";
import "./Signup.css"
//creating a signup component and defining its state!
class Signup extends React.Component{
    state={
        username:"",
        email:"",
        password:"",
        repassword:"",
        islogin:false
    }
    //assigning a fake data and storing in ls
    componentWillMount(){
        let fake_data=[]
        let data=ls.get("userdata")
        if(!data){
            ls.set("userdata",JSON.stringify(fake_data))
        }
    }
onchange=(e,name)=>{
        let data={}
        data[`${name}`]=e.target.value
        this.setState(data)
    }
    //validations and storing user signup data in ls...!
onClick=()=>{
    let format=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(format.test(this.state.email)){
                if(this.state.password.length>=8){
                    if(this.state.password.length==this.state.repassword.length){
                    alert("Signup Sucessfully")
                    let data=ls.get("userdata")
                    data=JSON.parse(data)
                    data.push({"email":this.state.email,"password":this.state.password,username:this.state.username})
                    data=JSON.stringify(data)
                    ls.set("userdata",data)
                    this.setState({email:"",password:"",username:"",islogin:true})
                }else{
                        alert("password mismatch")
                    }
         }else{
                    alert("incorrect password!!")
                }
        }
        else{
            alert("invalid email!!")
        }
        this.setState({
            username:"",
            email:"",
            password:"",
            repassword:"",
        })
       
    }   
    render(){
        //if user signups successfully we redirect him to signin page!
        if(this.state.islogin){
            return <Redirect to="/Auth"/>
        }
        
        return(
            //form data for signup!
            <div className="signup-details">
            <form className="form">
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Username</p>
            <input type="text" className="input" value={this.state.username} placeholder="enter username" onChange={(e)=>{this.onchange(e,"username")}}></input></div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Email</p>
            <input type="text" className="input" value={this.state.email} placeholder="enter email" onChange={(e)=>{this.onchange(e,"email")}}></input>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Password</p>
            <input type="password" className="input" value={this.state.password} placeholder="enter password" onChange={(e)=>{this.onchange(e,"password")}}></input>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Password</p>
            <input type="password" className="input" value={this.state.repassword} placeholder="enter repassword" onChange={(e)=>{this.onchange(e,"repassword")}}></input>
            </div>
            <button className="signup-button" onClick={this.onClick}>Sign UP!</button>
           </form>
           </div>
            
        )
}
}
export default Signup;