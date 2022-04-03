import styled from "styled-components";


export const BillingContainer = styled.div`
  background: #eee;
  padding: 30px;
`;

export const BillingWrap = styled.div`
  
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BillingLeft = styled.div`
  width: 70%;
  
  hr {
    width: 98%;
    height: 3px;
    background-color: #7a7a7a;
    border-style: solid;
  }
`;

export const BillingItems = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

export const BillingH1 = styled.h1`
  margin: 30px;
`;

export const BillingRight = styled.div`
  margin: 10px;
  align-items: flex-start;
`;

export const BillingRightBox = styled.div`
  display: flex;
  padding: 30px 60px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
`;

export const BillingSum = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
`;

export const BillingButton = styled.button`
  margin-top: 30px;
  background-color: #febd69;
  outline: 0;
  padding: 5px 40px;
  font-size: 1rem;
  border-style: outset;
  border-color: #febd69;
  
  &:hover {
    background-color: #EE8F02FF;
    border-color: #EE8F02FF;
  }
  &:active {
    transition: 2ms ease-in-out;
    transform: translateY(1px) translateY(2px);
  }
`;
