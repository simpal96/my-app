import {Link, withRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Cake from "./Cake";
import {connect} from "react-redux";

var Cart = (props) => {
    const [cakes, getCakes] = useState([]);
    let totalPrice = 0

    useEffect(() => {
        axios({
            url: process.env.REACT_APP_BASE_URL +'/cakecart',
            method: 'post'
        }).then(res => {
            if (res.data !== 'Session Expired') {
                const cakeList = res.data.data
                getCakes(cakeList);
                props.dispatch({
                    type: "SHOW_CART",
                    payload: {
                        data: cakeList
                    }
                })
            } else {
                props.history.push('/login')
            }
        }, err => {
            console.log('error')
        })
    }, [])

    return (
        <div className="container" style={{marginTop: "100px"}}>
            <h1>My Cart</h1>
           
            <div className="row">


             { props.cart &&  props.cart.map((each,index)=>{
            return( <Cake data={each} key={index} />)
            
        })}
            </div>
            
            <span style={{float : "right", marginTop : "31px"}}>
                <Link to={'/checkout'} className="btn btn-primary">Checkout</Link>
            </span>
        </div>
    )
}

Cart = withRouter(Cart)
Cart = connect(function (state, props) {
    return{
        cart : state.CartReducer.cart,
        totalPrice : state.CartReducer.totalPrice,

    }
})(Cart)

export default Cart