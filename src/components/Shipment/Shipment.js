import './Shipment.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import NavBar from '../NavBar/NavBar';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState();
  const onSubmit = data => {
    const savedCart = getDatabaseCart();
    setShippingData(data);
  };

  const handlePaymentSuccess = paymentId => {
      
      const orderDetails = { 
        ...loggedInUser, 
        shipment: shippingData, 
        paymentId,
        orderTime: new Date() 
      };
  
      fetch('https://obscure-beach-77356.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            processOrder();
            alert('your order placed successfully');
          }
        })
    }

  return (
    <div>
      <NavBar />
      <div className="container shipment-container">
      <div className="row">
        <div  className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <p>Name</p>
          <input  name="name" defaultValue={loggedInUser.name} {...register("name",{ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}
          <br /><br />
          <p>Email</p>
          <input name="email" defaultValue={loggedInUser.email} {...register("email",{ required: true })}  placeholder="Your Email"/>
          {errors.email && <span className="error">Email is required</span>}
          <br /><br />
          <p>Address</p>
          <input name="address" {...register("address",{ required: true })}  placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

        </form>
        </div>
          <div className="col-md-6">
            <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Shipment;