import React from "react";
import {CartButton, CratBox, CratCardContainer, CratLeft,
    Cratp, CratRight, CratTitle, CratRating} from "./CratCardElements";
import {useStateValue} from "../StateProvider";


export default function CratCard({ item }) {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FORM_BASKET',
            id: item.id,
        })
    }

    return(
        <CratCardContainer>
            <CratBox>
                <CratLeft>
                    <img src={item.img} alt={item.name} />
                </CratLeft>
                <CratRight>
                    <CratTitle>{item.name}</CratTitle>
                    <Cratp>Rs.{item.price}</Cratp>
                    <CratRating>
                        { Array(item.rating).fill().map((_, i) => (<Cratp key={i}>⭐</Cratp>)) }
                    </CratRating>
                    <CartButton onClick={removeFromBasket}>Remove From Basket</CartButton>
                </CratRight>
            </CratBox>
        </CratCardContainer>
    );
}
