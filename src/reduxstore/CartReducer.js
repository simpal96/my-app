function CartReducer(state = {
	cart :  [],
	totalprice : 0,
	isloading: false,
	 totalItems: 0,
}, action){

	switch(action.type){
		case "ADD_TO_CART_STARTED" :{
		state = {...state}
		state['isloading'] = true
		return state
		}

	    case "ADD_TO_CART_SUCCESS" :{
	    state = {...state}
	    state.cart.push(action.payload?.cart)
		state["isloggedin"] = false
	
		return state
		}

    	case "ADD_TO_CAKE_FAILURE" :{
	    state = {...state}
	    state['isloading'] = false
		return state
		}


      case "SHOW_CART" : {

			state = {...state}
            state["cart"] = action.payload?.data
            	console.log(state.cart);
            return state
        }


		default : 
		return state
		}

}
export default CartReducer