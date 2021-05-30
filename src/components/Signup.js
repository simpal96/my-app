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

	render(){
		return (
		<div>
       
       {this.state.likes}
       <button onClick={this.like} className="btn btn-primary">Like</button>
     	</div>
     	)

	}
}

export default Signup;