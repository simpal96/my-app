import {Component} from "react"

class Signup extends Component{

	constructor (){
		super()
		this.state = {
			likes : 0
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

	render(){
		return (
		<div>
       
       {this.state.likes}
       <button onClick={this.like} className="btn btn-primary">Like</button>
        <button onClick= {this.login} className="btn btn-primary">login</button>
     	</div>
     	)

	}
}

export default Signup;