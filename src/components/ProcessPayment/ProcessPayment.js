import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeLqhIxmJ303I1fAmcn48YmLTNEpFSEjRgX66LcP02sS3w2e4o6LBFGjJG6NmnvVk8JX3q8GpNej4tRU32EtdPe00X9uCSayz');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;