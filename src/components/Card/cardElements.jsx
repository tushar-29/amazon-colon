import styled from "styled-components";


export const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  transition: .3s ease-in-out;
  
  &:hover {
    transform: scale(1.05) translateX(-5px);
    box-shadow: 5px 5px #ccc;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  font-family: sans-serif;
  text-transform: capitalize;
  padding-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 1.3rem;
`;

export const CardRating = styled.p`
  display: flex;
  flex-direction: row  ;
  font-size: 1rem;
  letter-spacing: 5px;
`;

export const CardImage = styled.img`
  height: 200px;
  width: auto;
  padding: 10px 30px;
  margin: 20px 0;
  outline: none;
`;

export const CardButton = styled.button`
  padding: 15px 50px;
  font-size: .8rem;
  color: white;
  background-color: #EE8F02FF;
  outline: none;
  border: none;
  border-radius: 10px;
`;