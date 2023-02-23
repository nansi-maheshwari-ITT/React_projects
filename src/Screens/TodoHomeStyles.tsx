import styled from "styled-components";

const MainBox = styled.div`
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin: 50px auto;
  padding: 4% 4%;
  border-radius: 5px;

  @media (max-width: 520px) {
      max-width: 350px;
  }
`;

const Header = styled.header`
  font-size: 30px;
  font-weight: 600;
`;

const Ul=styled.ul`
list-style: none;
max-height:32vh;
margin-block-start: 0px;
margin-block-end: 0px;
padding-inline-start: 0px;
overflow:auto;
`;

export {MainBox,Header,Ul}