import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';


function CakeDetails(props){

 var param=useParams();
 var apiurl="https://apibyashu.herokuapp.com/api/cake/"+param.cake
 var [cakedetails, setCakesdetail] = useState([])
 useEffect(()=>{
  axios({
    url:apiurl,
    method:"get",
  }).then((response)=>{
    setCakesdetail(response.data.data)
  },(error)=>{
    console.log("Error from api",error)
  }

  )
},[])
 return  (
  
<div class="container">
<hr></hr>
  <h2>Details of cake Id {param.cake}</h2>
    <hr></hr>
    <div class="row">
    <div class="col-sm-3">
     <img src={cakedetails.image}></img>
      <br></br>
    </div>
    <div class="col-sm-9">
       <h3>{cakedetails.name}</h3>
        <p>Price: {cakedetails.price}</p>
        <h5>Des:</h5><p>{cakedetails.description}</p>
        <p>Reviews : {cakedetails.reviews}</p>
        <p>Weight :{cakedetails.weight}</p>
        <p>Flavour : {cakedetails.flavour}</p>
    </div>
    <button className="btn btn-primary">Add to Cart</button>
  </div>
</div>



  )
}
export default CakeDetails

