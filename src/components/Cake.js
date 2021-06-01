function Cake(props) {
	if(props.data){

		return(
			<div className="card" style={{width: "18rem"}}>
			<img style = {{height : "15em"}} src={props.data.image} className="card-img-top" alt="..." />
			<div className="card-body">
			<h5 className="card-title">{props.data.name}</h5>

			<p class="card-text">{props.data.price}</p>
			</div>
			</div>)



	}
	else{
		return null
	}	
}


export default Cake