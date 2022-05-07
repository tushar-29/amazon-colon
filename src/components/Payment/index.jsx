import React, {useEffect, useState} from "react";
import {PaymentContainer, PaymentH1, Paymentitem, PaymentBox, PaymentCheckout,
    PaymentButton, PaymentRightBox, PaymentSum, PaymentCard, PaymentAddress,
    PaymentInfo, PaymentEntry} from './PaymentElement';
import CratCard from "../CratCard";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from '../axios';
import {useNavigate} from "react-router-dom";
import { db } from "../../firebase_setup";


export default function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    let j=1;

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const [clientSecret, setClientSecrete] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
    //generate special stripe secret for each basket amount
    //change in amount lead to change in stripe secretes

        //request for client secrete using axios
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/check-out/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecrete(response.data.clientSecret)
        }
        getClientSecret();

    }, [basket])

    console.log("CLIENT SECRETE is >>>>", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // just allow to send one request and bloock by disabling processing
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        //    conformation responce if payment is made
        }).then(({ paymentIntent }) => {

            // going to user info and to its order
            // from strip(paymentIntent we get the a id
            // and set db with basket amount and time when ordered
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate('/returns-orders');

            dispatch({
                type : 'EMPTY_BASKET'
            })
        })

    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return(
        <PaymentContainer>
            <PaymentH1>Checkout ({basket.length} items):</PaymentH1>
            <PaymentBox>
                {
                    basket.map((item) => (
                        <Paymentitem>
                            <CratCard key={j++} item={item} show={false} />
                        </Paymentitem>
                    ))
                }
            </PaymentBox>
            <PaymentCheckout>
                <PaymentAddress>
                <h4>Delievery Address : </h4>
                <p>
                    Hostal No. 1, Old Boys Hostal, Smit Campus, Smit,
                    Majitar Ragpoo, East Sikkim - 737136
                </p>
                </PaymentAddress>
                <PaymentEntry>
                    <form onSubmit={handleSubmit}>
                        <PaymentInfo>
                            <h4>Payment Method : </h4>
                            <PaymentCard>
                                <CardElement onChange={handleChange} />
                            </PaymentCard>
                            {error && <div>{error}</div>}
                        </PaymentInfo>
                        <PaymentRightBox>
                                <PaymentSum><strong>Subtotal ({basket.length} items) :</strong>
                                    ₹{getBasketTotal(basket)}.00
                                </PaymentSum>
                                <PaymentButton disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p> : <p>Buy Now</p> }
                                    </span>
                                </PaymentButton>
                            </PaymentRightBox>
                        </form>
                    </PaymentEntry>
            </PaymentCheckout>
        </PaymentContainer>
    );
}
 