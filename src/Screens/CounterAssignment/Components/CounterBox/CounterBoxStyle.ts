import styled from "styled-components";

const CounterCard = styled.div`
  background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 600px) {
    max-width: 350px;
  }
`;
const CountBox = styled.div`
  height: fit-content;
  background-color: #e7c8e4;
  padding: 1em;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export { CounterCard, CountBox };
