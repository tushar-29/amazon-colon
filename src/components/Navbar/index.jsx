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
import {auth} from "../../firebase_setup";


export default function Navbar() {
    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
            alert("You have been Sign Out Successfully");
        }
    }

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
                <NavbarItems to={!(user) && "/sign-in"}>
                    <div onClick={handleAuthentication}>
                        <NavbarTopText>Hello {user ? user.email.slice(0, 6) : 'Guest'}</NavbarTopText>
                        <NavbarBottomText>
                        {user ?  'Sign Out' : 'Sign In' }
                        </NavbarBottomText>
                    </div>
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

            <NavbarBasketWrap to={"/basket"}>
                <NavbarBasketButton>
                    <BsBasket2Fill />
                </NavbarBasketButton>
                    <NavbarBasketCounter>{ basket?.length }</NavbarBasketCounter>
            </NavbarBasketWrap>
        </NavbarContainer>
    );
}
