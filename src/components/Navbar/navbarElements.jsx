import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const NavbarContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavbarLogoWrap = styled(LinkRouter)`
  object-fit: contain;
  margin: 18px 20px 0 20px;
  cursor: pointer;
  img {
    width: 100px;
  }
`;

export const NavbarSearchWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const NavbarSearch = styled.input` 
  height: 38px;
  padding: 10px;
  border: none;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  
  &:focus {
    border: none;
    outline: none;
  }
`;

export const NavbarSearchButton = styled.button`
  background-color: #febd69;
  padding: 10px 18px;
  height: 38px !important;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 20px;
  border: none;
  outline: 0;
  transition: .5ms ease-in-out;
  
  &:hover {
    background-color: #EE8F02FF;
  }
  &:active {
    transform: translateY(1px);
    transition: .5ms ease-in-out;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 20px;
`;

export const NavbarItems = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export const NavbarTopText = styled.p`
  font-size: 0.7rem;
  color: #747882;
`;

export const NavbarBottomText = styled.h6`
  font-size: 1rem;
  font-weight: 800;

  &:hover {
    color: #d9d8d8;
  }
`;

export const NavbarBasketWrap = styled(LinkRouter)`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    color: #d9d8d8;
  }
`;

export const NavbarBasketButton = styled.button`
  font-size: 2rem;
  background: transparent;
  color: #fff;
  outline: none;
  border: none;
  padding: 0 10px 0 0;
  cursor: pointer;
`;

export const NavbarBasketCounter = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
`;
