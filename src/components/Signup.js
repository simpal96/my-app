import {Component} from "react"
import react from 'react'
import {useEffect , useState} from "react"
import axios from "axios";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
const apiurl="https://apibyashu.herokuapp.com/api/register"

class Signup extends Component{

	constructor (){
		super()
		this.state = {
			likes : 0,
			 email:'',
             name:'',
            emailError:'',
			messgaedisplay:''
		}
	}

	like =()=>{
		this.setState({
			likes:this.state.likes+1
			//error: "email is required"
		})
	}


	login= (e)=>{
		e.preventDefault();
		this.props.callme()
	}

	EmailValidate = () => {
        if(this.state.email === ''){
          this.setState({
          emailError: "Email cannot be empty"
        });
        }
         if (!emailPattern.test(this.state.email) ) {
            
          this.setState({
            emailError: "Enter a valid email"
          });
        }
        if(emailPattern.test(this.state.email)){
            this.setState({
                emailError: ""
              });
        }      
     };

    changeEmail = (evt) => {
        this.EmailValidate();
          this.setState({
            email: evt.target.value,
        });
    }  

    setPassword = (evt)=>{
        this.setState({
          password: evt.target.value,
          
        });
    }
    setName = (evt)=>{
        this.setState({
          name: evt.target.value,
          
        });
    }

    validateForm() {
       return this.state.email !=='' && this.state.password !=='' && this.state.name !=='';
    }

      formsubmit(event){
        const data = {
          name: this.state.name,
          email: this.state.email,
          password : this.state.password
      };

          event.preventDefault();
          axios({method:"POST",url:apiurl,data:data}).then((response)=>{
            console.log("response..", response.data);
              this.setState({
              messgaedisplay : response.data.message})
                },(error)=>{
            this.setState({
              messgaedisplay : error.data.message})
               
            console.log("error.......",error.data)});
        
      }
    

	render(){
		return (
		<div>
          <p  style={{"color":"red"}} >{this.state.messgaedisplay}</p>
         
		  <form id="Sign" style={{border:"1px solid"}} autoComplete="" onSubmit={this.formsubmit.bind(this)}>
		  <div className="container">
		    <h1>Sign Up</h1>
		    <p>Please fill in this form to create an account.</p>
		    <hr></hr>

		    <label for="name"><b>Name</b></label>
		    <input type="text" placeholder="Enter Name" name="name" required onChange={this.setName.bind(this)} value={this.state.name} />

		    <label for="email"><b>Email</b></label>
		    <input type="text" placeholder="Enter Email" name="email" required value={this.state.email} onChange={this.changeEmail.bind(this)} />


		    <label for="psw"><b>Password</b></label>
            <input type="password" className="signup form-control" id="password" onChange={this.setPassword.bind(this)} value={this.state.password} placeholder="Password"/>
		    
		    <div className="clearfix">
		     <button className="signup btn btn-primary" disabled={!this.validateForm()}>Signup</button>
		    </div>
		  </div>
		</form>

       {this.state.likes}
       <button onClick={this.like} className="btn btn-primary">Like</button>
        <button onClick= {this.login} className="btn btn-primary">login</button>
     	</div>
     	)

	}
}

export default Signup;