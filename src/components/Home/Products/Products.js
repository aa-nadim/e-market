import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadProducts } from '../../../store/actions/productActions';
import ProductInfo from '../ProductInfo/ProductInfo';

const Products = () => {
    const products =  useSelector((state) => {
        return state.ProductsReducer.discoverProducts;
    })
    const dispatch = useDispatch()
    useEffect(() => dispatch(loadProducts()), [dispatch])
    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <ProductInfo product={product} key={product.id}></ProductInfo>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;