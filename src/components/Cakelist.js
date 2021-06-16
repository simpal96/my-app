import cakes from "./data"
import Cake from "./Cake"
import React from 'react';
import axios from 'axios';
import {useEffect , useState} from "react"

function Cakelist(){
	var apiurl  = process.env.REACT_APP_BASE_URL+"/allcakes"
	var [cakes,setCakes] = useState([])

useEffect(() =>{
	axios({

		url:apiurl,
		method : "get",
	}).then(( response) =>{
		console.log("response", response, response.data)
		setCakes(response.data.data)
},(error)=>{
	console.log("error",error)
})
},[])

	return(


		<div className="row">

		{ cakes.map((each,index)=>{
			return( <Cake data={each} key={index} />)
			
		})}
		</div>
		

		)
	}

	export default Cakelist