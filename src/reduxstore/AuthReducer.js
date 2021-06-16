function AuthReducer(state = {
isloggedin:localStorage.getItem('userAccessToken')?true:false,
username:'',
token:localStorage.getItem('userAccessToken'),
isloading: false
}, action){

	switch(action.type){
    
	    case "LOGIN_STARTED" : {
			state = { ...state}
			state['isloading'] = true
			return state
		}  

		case "LOGIN_SUCCESS" :{
		state = {...state}
		state["token"] = action.payload?.token
		state["isloggedin"] = true
		state["username"] = action.payload?.username
		return state
		}

		case "LOGIN_FAILURE" : {
			state = { ...state}
			state['isloading'] = false
			return state
		} 


	    case "LOGOUT" :{
	    state = {...state}
		localStorage.clear()
		state["isloggedin"] = false
		state["username"] = undefined
		return state
		}

		default : 
		return state
		}

}
export default AuthReducer