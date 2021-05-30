import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import './App.css';
import Carousel from "./components/carousel.component";

var details =  {
projectname : "My cake",
username : "simpal"
}

function App(){
return (
	<div>
    <Navbar details={details} project ="My cake shop" name ="hello">Simpal</Navbar>
    <Carousel></Carousel>
    <Signup></Signup>
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