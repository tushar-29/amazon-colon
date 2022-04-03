import styled from "styled-components";


export const HeaderContainer = styled.div`
  
`;

export const HeaderImage = styled.div`
  background: blue url("BackgroundImage.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
`;

export const HeaderItemContainer = styled.div`
  background: rgb(4,104,156);
  background: linear-gradient(to bottom, rgba(0, 34, 62, 1) 0%, rgba(0, 0, 0, 1) 100%);
  padding: 30px;
  grid-row-gap: 1em;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  padding: 30px 20px;
  background-color: #eee;
`;
