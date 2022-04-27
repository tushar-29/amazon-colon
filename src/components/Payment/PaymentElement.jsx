import styled from "styled-components";


export const PaymentContainer = styled.div`
  padding: 50px;
  background: #ccc;
`;

export const PaymentH1 = styled.h1`
  font-size: 2rem;
  padding: 10px;
  text-decoration: underline;
`;

export const PaymentBox = styled.div`
  padding: 20px;
  background: #fff;
`;

export const Paymentitem = styled.div`
  padding-bottom: 30px;
  background: #fff;
`;

export const PaymentCheckout = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 30px 30px 30px;
  gap: 30px;
  
  h4{
    font-size: 1.4rem;
  }
`;

export const PaymentAddress = styled.div`
  flex-grow: 2;
    p{
      font-size: 1rem;
      width: 200px;
      padding-top: 10px;
      
    }
`;
export const PaymentRightBox = styled.div`
  display: flex;
  padding: 30px 60px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
`;

export const PaymentCard = styled.div`
      
`;

export const PaymentSum = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
`;

export const PaymentButton = styled.button`
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
