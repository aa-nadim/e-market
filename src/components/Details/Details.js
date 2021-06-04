import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { loadProducts } from '../../store/actions/productActions';
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const products =  useSelector((state) => {
        return state.ProductsReducer.discoverProducts;
    })
    const dispatch = useDispatch()
    useEffect(() => dispatch(loadProducts()), [dispatch])

    const targetedProduct = products.find(product =>  product.id === parseInt(id));
    
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="container mt-100">
           <div className="row">
                <div className="col-6">
                    <div className="details__image">
                    <img src={targetedProduct.url} alt=""/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {targetedProduct.title}
                    </div>
                    <div className="details__prices">
        <span className="details__actaul">{currencyFormatter.format(500, { code: 'USD' })}</span>
        <span className="details__discount">{currencyFormatter.format(450, { code: 'USD' })}</span>
                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
        <span className="dec" onClick={decQuantity}><BsDash /></span>
        <span className="quantity">{quantity}</span>
        <span className="inc" onClick={() => setQuantity(quantity+1)}><BsPlus/></span>
        <button className="btn-default" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {targetedProduct, quantity} })}>add to cart</button>
                        </div>
                    </div>
                    <div className="details__p">
                        <h4>Details</h4>
                        {/* {targetedProduct.desc} */}
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem temporibus nulla, doloremque vel aperiam nisi quasi iure alias, ratione, nostrum hic voluptas reprehenderit velit commodi voluptatibus placeat praesentium accusantium excepturi?</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Details
