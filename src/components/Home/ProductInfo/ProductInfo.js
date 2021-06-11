import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import currencyFormatter from "currency-formatter";
import './ProductInfo.css';

const ProductInfo = (props) => {
    const { id, albumId, title, thumbnailUrl, url} = props.product;
    return (
        <>
            <div className="col-lg-6 col-xl-4 mt-4" key={id}>
                <Card className="shadow">
                    <div className="product__img">
                        <Link to={`/details/${id}`}>
                            <Card.Img
                                variant="top"
                                src={thumbnailUrl}
                                style={{
                                    height: '450px',
                                    padding: '10px',
                                    borderRadius: '15px',
                                    display: 'block',
                                }}
                                className="animation"
                            />
                        </Link>
                    </div>
                    <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text className="text-muted">{title} {title} </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-around">
                        <div className="product__price">
                            <span className="actualPrice">
                                {currencyFormatter.format(500, { code: 'USD' })}
                            </span>{' '}
                            <span className="text-muted">10%</span>
                        </div>
                        <div className="product__discount__price">
                            <span className="discount">
                                {currencyFormatter.format(450, { code: 'USD' })}
                            </span>
                        </div>
                    </Card.Footer>   
                </Card>
            </div>
        </>
    );
};

export default ProductInfo;