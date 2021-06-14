import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import NavBar from "../../NavBar/NavBar";
import './CartDetails.css';
import { Link } from 'react-router-dom';
const CartDetails = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <NavBar />
            <div style={{marginTop:"120px"}} className="container">
                <h3>Your cart</h3>
                {products.length > 0 ? <>
                    <div className="twin-container">
                    <table class="product-container">
                        <thead>
                            <tr>
                                <th scope="col">Picture</th>
                                <th  scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Inc/Dec</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Remove</th>
                                
                            </tr>
                        </thead>
                        {products.map(product => (
                            <tbody key={product._id}>
                                <tr>
                                    <td><img src={product.image} alt=""/></td>
                                    <td style={{width:"150px"}}>{product.name}</td>
                                    <td>{currencyFormatter.format(450, {code: 'USD'})}</td>
                                    <td style={{width:"150px"}}><div className="d-flex justify-content-center">   
                                            <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product._id})}><BsDash /></span>
                                            <span className="quantity">{product.quantity}</span>
                                            <span className="inc" onClick={() => dispatch({type: 'INC', payload: product._id})}><BsPlus/></span>
                                        </div></td>
                                    <td>{currencyFormatter.format(450 * product.quantity, {code: 'USD'})}</td>
                                    <td onClick={() => dispatch({type: 'REMOVE', payload: product._id})}><BsReverseBackspaceReverse /></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                        <div className="checkout-container">
                            <h3>Summary</h3>
                            <br />
                            <div className="d-flex justify-content-between">
                                <p>Total Items:</p>
                                <span>{totalQuantities}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>TotalPrice:</p>
                                <span>{currencyFormatter.format(totalPrice, {code: 'USD'})}</span>
                            </div>
                             <div><Link to="/shipment" style={{width:"100%"}} type="button" className="btn btn-success">Checkout</Link></div>
                        </div>
                    </div>
                </> : 'Your cart is empty!'}
            </div>
        </div>
    );
};

export default CartDetails;