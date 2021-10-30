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
    // console.log(products);
    return (
        <>
            <div className="container my-5">
                <div className="row my-5">
                    <h1 className="d-flex justify-content-center my-5">Our Products</h1>
                    {products.map(product => (
                        <ProductInfo product={product} key={product._id}></ProductInfo>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;