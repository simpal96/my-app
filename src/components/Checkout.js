import {Redirect , 	Link} from "react-router-dom"
import Summary from "./Summary"
import Address from "./Address"
import Confirm from "./Confirm"
import {Route} from "react-router-dom"


function Checkout(){

return(

	<>
	<div className="row">
	<div className="col-4">
<Link to= "/checkout/summary"> Summary </Link>
<Link to= "/checkout/address"> Address </Link>
<Link to= "/checkout/confirm"> Confirm </Link>

	</div>


	<div className="col-8" >list</div>
    <Route exact path ="/checkout/" ><Redirect to="/checkout/summary" /></Route>

    <Route exact path ="/checkout/summary" component={Summary}></Route>
    <Route exact path ="/checkout/address" component={Address}></Route>
    <Route exact path ="/checkout/confirm" component={Confirm}></Route>


	</div>
	</>
	)
}
export default Checkout