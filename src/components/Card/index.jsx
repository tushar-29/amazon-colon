import React from "react";
import {CardButton, CardContainer, CardImage, CardPrice, CardRating,
    CardTitle} from "./cardElements";
import {useStateValue} from "../StateProvider";


export default function Card({ title, price, rating, img, id}) {

    const [{basket}, dispatch] = useStateValue();

    //dispatch is object which send item to data layer
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                name: title,
                price: price,
                rating: rating,
                img: img,
            }
        })
    }

    return(
        <CardContainer>
            <CardTitle>{ title }</CardTitle>
            <CardPrice>₹{ price }.00</CardPrice>
            <CardRating>
                { Array(rating).fill().map((_, i) => (<span key={i}>⭐</span>)) }
            </CardRating>
            <CardImage src={img} alt={title} />
            <CardButton onClick={addToCart} name={id}>Add to Cart</CardButton>
        </CardContainer>
    );
}
