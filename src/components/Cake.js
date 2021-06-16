import {Link} from "react-router-dom"
function Cake(props) {
	if(props.data){

		return(
			<div className="card m-2" style={{width: "18rem"}}>
 			<Link to={'/cake/'+props.data.cakeid}><img style = {{height : "15em"}} src={props.data.image} className="card-img-top" alt="..." /></Link>
			<div className="card-body">
			<h5 className="card-title">{props.data.name}</h5>
	        <p class="card-text">Price : {props.data.price}</p>
			</div>
			</div>)



	}
	else{
		return null
	}	
}


export default Cake