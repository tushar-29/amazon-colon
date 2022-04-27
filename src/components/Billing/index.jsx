import React from "react";
import {
    BillingButton, BillingContainer, BillingH1, BillingItems,
    BillingLeft, BillingRight, BillingRightBox, BillingSum, BillingWrap
} from "./billingElements";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import CratCard from "../CratCard";
import {useNavigate} from "react-router-dom";


export default function Billing() {
    const navigate = useNavigate()
    const [{basket, user}] = useStateValue();
    let i=0;

    return(
        <BillingContainer>
            <BillingWrap>
                <BillingLeft>
                    <BillingH1>{ user && user.email.slice(0, 6)+'\'s'} Your Shopping Basket</BillingH1>
                    <hr />

                    <BillingItems>
                            {
                                basket.map((item) => (
                                        <CratCard item={item} key={i++} show={true}/>
                                ))
                            }
                    </BillingItems>
                </BillingLeft>

                <BillingRight>
                    <BillingRightBox>
                        <BillingSum><strong>Subtotal ({basket.length} items) :</strong>
                            ₹{getBasketTotal(basket)}.00
                        </BillingSum>
                        <BillingButton onClick={ (e) => navigate('/check-out') }>
                            Proceed to Checkout
                        </BillingButton>
                    </BillingRightBox>
                </BillingRight>
            </BillingWrap>
        </BillingContainer>
    );
}
 