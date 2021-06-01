import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import './App.css';
import CarouselComponent from "./components/carousel.component";
import Cakelist from "./components/Cakelist";
import {useState} from "react"






function App(){
var [login , setLogin] = useState(false)

var details =  {
projectname : "My cake",
username : "simpal"
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

return (
	<div>
    <Navbar isloggedin = {login} details={details} project ="My cake shop" name ="hello">Simpal</Navbar>
    <CarouselComponent />
    <Signup callme={myphone}>simpal@gmail.com</Signup>
    <Cakelist cake={product} />
  
 

	</div>
	)

}



export default App

var obj = {
	details:{
		projectname : "My cake",
		username : "simpal"
},
project : "My cake shop",
name: "hello"
}