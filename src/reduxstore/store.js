import {createStore ,combineReducers, applyMiddleware} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import thunk from "redux-thunk"


let middle=store=>next=>action=>{
	//alert("reducwer kk phle");
	next(action)
}


var reducers = combineReducers({AuthReducer ,CartReducer})

let store = createStore(reducers , applyMiddleware(middle,thunk))

export default store

 //(JSON.stringify(store.getState())) ;