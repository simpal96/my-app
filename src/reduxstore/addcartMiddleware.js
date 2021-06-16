import axios from 'axios';

export function addcartMiddleware(data) {
 alert(JSON.stringify(data)) ;
	return function (dispatch) {
		dispatch({
			type : "ADD_TO_CART_STARTED"
		})
		axios({
			url : process.env.REACT_APP_BASE_URL+"/addcaketocart", 
			method : "post", 
			data: {'cakeid' : data.cakeid, 'name': data.name, 
			'image' : data.image, 'price' : data.price, 'weight': data.weight }
		}
		).then((response) => {     
         if(response.data == "Session Expired"){
		 
          dispatch({
           type: "ADD_TO_CAKE_FAILURE",
		  })

		} else{

           	alert("cake added in cart");
		   dispatch({
           type: "ADD_TO_CART_SUCCESS",
           payload:{
           	cart: response.data
           }
		  })
		      //rops.history.push('/cart')
		}

		}, (error) => {
         dispatch({
           type: "ADD_TO_CAKE_FAILURE",
		  })
		});
	}
}