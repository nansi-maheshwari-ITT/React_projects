import styled from "styled-components"
const MainDiv=styled.div`
background-color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  width:100%;
  height:100%;
  max-height:250px;
  max-width: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align:center;
  border-radius:10px;

  @media (max-width: 520px) {
	max-width: 350px;
}
`
const Heading=styled.h1`
margin-bottom:15%;
`
export {MainDiv,Heading}