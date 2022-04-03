import React from "react";
import {
    NavbarBasketButton, NavbarBasketCounter, NavbarBasketWrap,
    NavbarBottomText, NavbarContainer, NavbarItems, NavbarLogoWrap, NavbarMenu,
    NavbarSearch, NavbarSearchButton, NavbarSearchWrapper, NavbarTopText
} from "./navbarElements";
import AmazonLogo from "../../images/AmazonLogo.png";
import { BsSearch } from "react-icons/bs"
import { BsBasket2Fill } from "react-icons/bs";
import {useStateValue} from "../StateProvider";


export default function Navbar() {
    const [{basket}] = useStateValue();


    return(
        <NavbarContainer>
            <NavbarLogoWrap to={"/"}>
                <img src={AmazonLogo} alt={"AmazonLogo"}  />
            </NavbarLogoWrap>
            <NavbarSearchWrapper>
                <NavbarSearch  type={"text"}/>
                <NavbarSearchButton type="submit" aria-label="search">
                <BsSearch />
                </NavbarSearchButton>
            </NavbarSearchWrapper>

            <NavbarMenu>
                <NavbarItems to={"/sign-in"}>
                    <NavbarTopText>Hello Guest</NavbarTopText>
                    <NavbarBottomText>Sign in</NavbarBottomText>
                </NavbarItems>

                <NavbarItems to={"/returns-orders"}>
                    <NavbarTopText>Returns</NavbarTopText>
                    <NavbarBottomText>& Orders</NavbarBottomText>
                </NavbarItems>

                <NavbarItems to={"/your-prime"}>
                    <NavbarTopText>Your</NavbarTopText>
                    <NavbarBottomText>Prime</NavbarBottomText>
                </NavbarItems>
            </NavbarMenu>

            <NavbarBasketWrap to={"/check-out"}>
                <NavbarBasketButton>
                    <BsBasket2Fill />
                </NavbarBasketButton>
                    <NavbarBasketCounter>{ basket?.length }</NavbarBasketCounter>
            </NavbarBasketWrap>
        </NavbarContainer>
    );
}
