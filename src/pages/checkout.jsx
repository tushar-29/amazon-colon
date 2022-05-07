import React from "react";
import Payment from '../components/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Ku7ejSIUgHlz7jmBrxnv1PcrImyqlQVEdNMwSksFbnvVhdpsxAhJYaaI8AqesCMPpxLQeaj36xEEmTLEZHeihAh00luF5Gyh5')

export default function Checkout() {


    return(
        <div>
            <Elements stripe={promise}>
                 <Payment />
            </Elements>
        </div>
    );
}
