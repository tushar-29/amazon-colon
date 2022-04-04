import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const SigninContainer = styled.div`
  background-color: #eee;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoLink = styled(LinkRouter)`
  img {
    margin: 10px;
    height: 80px;
  }
`;


export const SigninBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px;
  width: 22%;
  border-radius: 10px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  
   label {
    font-size: 15px;
     font-weight: 600;
  }
  
  input {
    height: 40px;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

export const SigninH1 = styled.div`
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SigninBtn = styled.button`
  height: 40px;
  border: #ffa923 outset;
  background-color: #ffa923;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 169, 35, 0.85);
  }

  &:active {
    transition: 2ms ease-in-out;
    transform: translateY(2px);
  }
`;


export const SigninP = styled.p`
  margin-bottom: 10px;
  font-size: .9rem;
`;

export const LoginBtn = styled.button`
  height: 40px;
  border-style: outset;
  background-color: #eee;
  border-color: #eee;;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d7d7d7;
  }

  &:active {
    transition: 2ms ease-in-out;
    transform: translateY(2px);
  }
`;
