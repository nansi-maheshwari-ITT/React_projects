import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: fit-content;
  max-width: 550px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @media (max-width: 600px) {
    max-width: 400px;
  }
`;

const CardHeading = styled.h1`
  text-align: center;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 4em 1em;
`;

export { Card, CardHeading, Ul };
