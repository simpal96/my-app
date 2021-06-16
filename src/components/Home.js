import cakes from "./data"
import Cake from "./Cake"
import React from 'react';
import axios from 'axios';
import {useEffect , useState} from "react"
import CarouselComponent from "./carousel.component";

function Cakelist(){
	var apiurl  = process.env.REACT_APP_BASE_URL+"/allcakes"
	var [cakes,setCakes] = useState([])
	var [isLoading,setloading] = useState(true)

useEffect(() =>{
	axios({

		url:apiurl,
		method : "get",
	}).then(( response) =>{
		console.log("response", response, response.data)
		setCakes(response.data.data)
		setloading(false)
},(error)=>{
	console.log("error",error)
	setloading(false)
})
},[])
	return(
    
			<div className="row">
			<CarouselComponent />
			<div className="cake-list">

				{ cakes.map((each,index)=>{
					return( <Cake data={each} key={index} />)
					
				})}
			{isLoading && <div>Loading...</div>}
			</div>
			</div>

		)
}

export default Cakelist