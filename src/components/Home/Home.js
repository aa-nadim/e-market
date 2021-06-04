import React, { useEffect } from 'react';
import Header from '../Header/Header';
import {useDispatch, useSelector} from "react-redux";
import { loadProducts } from '../../store/actions/productActions';
import currencyFormatter from "currency-formatter";
import {Link} from "react-router-dom"

const Home = () => {
    const products =  useSelector((state) => {
        return state.ProductsReducer.discoverProducts;
    })
    const dispatch = useDispatch()
    useEffect(() => dispatch(loadProducts()), [dispatch])
    
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}><img src={product.thumbnailUrl} alt="image" /></Link>
                                </div>
                                <div className="product__name">
                                    {product.title} 
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price"> 
            <span className="actualPrice">{currencyFormatter.format(500, { code: 'USD' })}</span>
            <span className="discount">10%</span>
                                        </div>  
                                    </div>  
                                    <div className="col-6">
                                        <div className="product__discount__price"> 
                                            {currencyFormatter.format(450, { code: 'USD' })}
                                        </div>  
                                    </div>
                                </div>    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
