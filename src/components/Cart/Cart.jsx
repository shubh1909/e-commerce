import React from "react";
import { MdClose } from "react-icons/md";
import "./Cart.scss";
import Cartitem from "./CartItem/CartItem";
const Cart = ({setShowCart}) => {
    return <div className="cart-panel">
        <div className="opac-layer"> </div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>setShowCart(false)}> 
                {/* passed setShowCart as a prop  */}
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            {/* <div className="empty-cart">
                <BsCartX/>
                <span>No products in the cart.</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div> */}
            <>
            <Cartitem/>
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">Subtotal:</span>
                    <span className="text total">&#8377;1234</span>
                </div>
                <div className="button">
                    <button className="checkout-cta">Checkout</button>
                </div>
            </div>
            </>
        </div>
    </div>;
};

export default Cart;
