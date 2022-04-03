import React from "react";
import {HeaderContainer, HeaderImage, HeaderItemContainer, HeaderRow} from "./headerElements";
import Card from "../Card/";
import { product } from "./Product";


export default function Header() {


    return(
        <HeaderContainer>
            <HeaderImage />
            <HeaderItemContainer>
                <HeaderRow>
                {
                    product.map((item) =>(
                        <Card  key={item.id} rating={item.rating} price={item.price}
                               img={item.img} title={item.name} id={item.id}/>
                    ))
                }
                </HeaderRow>
            </HeaderItemContainer>
        </HeaderContainer>
    );
}
