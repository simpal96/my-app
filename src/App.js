import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css';
import Cakelist from "./components/Cakelist";
import CakeDetails from "./components/CakeDetails"
import {useState} from "react";
import { BrowserRouter as Router , Route,Switch} from "react-router-dom"
import Search from './components/Search';
import axios from "axios";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Pagenotfound from "./components/Pagenotfound";

function App(){

axios.interceptors.request.use((request)=>{
          request.headers['authtoken'] = localStorage.userAccessToken
          return request
     });
var [login , setLogin] = useState(false)

var details =  {
projectname : "My cake",
abouepage : "About"
}


var product = 
{
image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491901644-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2g1NS85NDIxOTE4NDcwMTc0LmpwZ3w1OGQ0YWJiYzI2ZjljZjA4Nzg5ZGIwYzA3MWRiMmIyMDA2MjQ1NDhjYTM1MTI3YWQ2ODY3YThhNDBiMzM1Nzk2",
name: "Cake",
price:123
}

var myphone = () =>{
	setLogin(true)
}
//console.log(">>>>>>>>>>>>>>" , process.env)
return (


	<Router>
  <Navbar isloggedin = {login} details={details} project ="Shop">Simpal</Navbar>
   
 <Switch>

     <Route exact path="/" component ={Home}></Route>
     <Route exact path="/about" component = {About}></Route>
     <Route exact path ="/search" component ={Search}></Route>
     <Route exact path ="/login" component = {Login}></Route>
     <Route exact path ="/signup" component = {Signup}></Route>
     <Route exact path="/cake/:cake" component={CakeDetails}></Route>
     <Route path ="/checkout"> <Checkout /></Route>
     <Route path ="/cart"> <Cart /></Route>
     <Route exact path ="/*" component = {Pagenotfound}></Route>

 </Switch>
	</Router>	
	)

}

export default App

var obj = {
	details:{
		projectname : "My cake",
		abouepage : "About"
},
project : "Shop",
name: "hello"
}