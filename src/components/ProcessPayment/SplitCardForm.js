import React, { useState, useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
      } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handlePayment(paymentMethod.id)
      }
    
  };

  return (
      <div className="mt-5">
    <form onSubmit={handleSubmit}>
      <div>
        <p>Card number</p>
        <CardNumberElement className="form-control" options={options} />
      </div>
      <br/>
      <div>
        <p>Expiration date</p>
        <CardExpiryElement className="form-control" options={options} />
      </div>
      <br/>
      <div>
        <p>CVC</p>
        <CardCvcElement className="form-control" options={options}/>
      </div>
      <br/>
      <button type="submit" disabled={!stripe} style={{ padding: ".68rem 2rem" }}>
      Pay Now
      </button>
    </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>
        }
    </div>
  );
};

export default SplitCardForm;