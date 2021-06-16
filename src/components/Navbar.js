import { useState } from 'react'
import react from 'react'
import {Link, Router, withRouter} from "react-router-dom";
import {connect} from "react-redux"

let Navbar = (props)=> {

  var [isloggedin , setUser] = useState(props.isloggedin)
let searchstring=""
  let  search = (event)=>{
    event.preventDefault()
    
    if(searchstring != null){
      if(searchstring !==""){
        var url = "/search?q="+searchstring
        props.history.push(url)
      }
    }
    else{
      alert("please enter");
    }
  }

  let getserchText = (event)=>{
    searchstring = event.target.value;
  }

let logout = () => {
   props.dispatch({
        type: "LOGOUT",
      })


}
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">{props.details.projectname}</a>
  <Link to="/about">{ props.details.abouepage }</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/*">{props.project}<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Welcome {props.children}</a>
      </li>
     </ul>

    <form className="form-inline my-2 my-lg-0">
<input className="form-control me-2" onChange = {getserchText} type="search"  placeholder="Search" aria-label="Search"/>
              
      <button className="search btn btn-outline-success" onClick={search} type="submit">Search</button>
       { !isloggedin && <Link to="/signup"> <button className="btn btn-success">Signup</button></Link>}
       { !props.isloggedin && <Link to="/login"> <button className="btn btn-primary">Login</button></Link>}

       { props.isloggedin && <button onClick={logout} className="btn btn-danger">Logout</button>}
    </form>
  </div>
</nav>
	)
}

Navbar = withRouter(Navbar)

function mapStateToProps(state, props){
 // alert("Nav"+JSON.stringify(state)) 
return {

         ...props ,
         username : state.AuthReducer.username,
         isloggedin: state.AuthReducer.isloggedin
      }
}
export default connect(mapStateToProps)(Navbar);

