import React from "react";
import {PaymentContainer, PaymentH1, Paymentitem, PaymentBox, PaymentCheckout,
    PaymentButton, PaymentRightBox, PaymentSum, PaymentCard, PaymentAddress} from './PaymentElement';
import CratCard from "../CratCard";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";


export default function Payment() {
    const [{basket, user}] = useStateValue();
    let i=0;
    
    return(
        <PaymentContainer>
            <PaymentH1>Checkout ({basket.length} items):</PaymentH1>
            <PaymentBox>
                {
                    basket.map((item) => (
                        <Paymentitem>
                            <CratCard item={item} key={i++} show={false}/>
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
                <h4>Payment Method : </h4>
                <PaymentRightBox>
                        <PaymentCard>

                        </PaymentCard>
                        <PaymentSum><strong>Subtotal ({basket.length} items) :</strong>
                            ₹{getBasketTotal(basket)}.00
                        </PaymentSum>
                        <PaymentButton>
                            Pay
                        </PaymentButton>
                    </PaymentRightBox>
            </PaymentCheckout>
        </PaymentContainer>
    );
}
 