import React, { useState } from "react";
import {
    BillingButton, BillingContainer, BillingH1, BillingItems,
    BillingLeft, BillingRight, BillingRightBox, BillingSum, BillingWrap
} from "./billingElements";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import CratCard from "../CratCard";



export default function Billing() {


    const [{basket}] = useStateValue();
    let i=0;

    return(
        <BillingContainer>
            <BillingWrap>
                <BillingLeft>
                    <BillingH1>Your Shopping Basket</BillingH1>
                    <hr />
                    <BillingItems>
                        {
                            basket.map((item) => (
                                <CratCard item={item} key={i++} />
                            ))
                        }
                    </BillingItems>
                </BillingLeft>

                <BillingRight>
                    <BillingRightBox>
                        <BillingSum><strong>Subtotal ({basket.length} items) :</strong>
                            ₹{getBasketTotal(basket)}.00
                        </BillingSum>
                        <BillingButton>Proceed to Checkout</BillingButton>
                    </BillingRightBox>
                </BillingRight>
            </BillingWrap>
        </BillingContainer>
    );
}
 