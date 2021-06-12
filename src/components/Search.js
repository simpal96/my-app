import querystring from 'query-string'

import Cake from './Cake';
import axios from "axios";
import { useEffect, useState } from 'react';

function Search(props){

    var query = querystring.parse(props.location.search)
var apiurl = `https://apibyashu.herokuapp.com/api/searchcakes?q=${query.q}`
    
    var [Cakes,setData]=useState([]);
    useEffect(()=>{
    axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
        console.log("propcale..",response.data.data)
       
        setData(response.data.data)

    },(error)=>{
        console.log("error..",error.data.data)
     
    });

    })
    return(
        <div className="list-container" >
        <div className="card-groups"  >
    {Cakes.map((each,index)=>{   
        return (    
                 <Cake data={each} key ={index}></Cake>
         )
 
     })}
  
      </div>
    
      </div>
    )
}
export default Search