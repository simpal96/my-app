import { useState } from 'react'
import react from 'react'
import { Link } from 'react-router-dom';

let Navbar = (props)=> {

  var [isloggedin , setUser] = useState(props.isloggedin)
let searchString
  let search = (event)=>{
    event.preventDefault();
    alert(searchString);
  }
  let searchStringText =function(event){
    searchString = event.target.value
  }	


  let logout = ()=>{
    setUser(false)

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
      <input onChange ={searchStringText} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={search} className="btn btn-outline-success my-2 my-sm-0">Search</button>

       { !isloggedin && <button className="btn btn-success">Login</button>}
       { isloggedin && <button onClick={logout} className="btn btn-danger">Logout</button>}
    </form>
  </div>
</nav>
	)
}

export default  Navbar
