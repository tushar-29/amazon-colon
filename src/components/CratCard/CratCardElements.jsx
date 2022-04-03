import styled from "styled-components";


export const CratCardContainer = styled.div`
    border: 2px black solid;
    margin: 10px 0; 
`;

export const CratBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CratLeft = styled.div`
  padding: 10px;
  img {
    padding: 5px;
    height: 200px;
    width: 200px;
  }
`;

export const CratRight = styled.div`
  padding: 35px;
`;



export const CratTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  font-family: sans-serif;
  text-transform: capitalize;
  padding-bottom: 15px;
`;

export const Cratp = styled.p`
  font-size: 1.3rem;
  padding: 10px 5px;
`;

export const CratRating = styled.div`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
`;

export const CartButton = styled.button`
  background-color: #EE8F02FF;
  padding: 10px 20px;
  font-size: .8rem;
  color: white;
  border-color: #EE8F02FF;
  border-radius: 5px;

  &:hover {
    background-color: #ffa923;
    border-color: #ffa923;
  }
  &:active {
    transition: 2ms ease-in-out;
    transform: translateY(2px) translateX(2px);
  }
`;