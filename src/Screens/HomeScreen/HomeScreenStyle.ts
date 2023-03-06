import styled from "styled-components";

const Maindiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
  color: #008080;
`;
const ProfileDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3em;
  margin-top: 3em;
`;
const ProfileImg = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 200px;

  @media (max-width: 768px) {
	height: 250px;
	width: 250px;
	border-radius: 150px;
  }
`;
const ProfileContent = styled.div`
  width: 50%;
  margin-left: 2em;
`;

export { ProfileContent, ProfileDiv, ProfileImg, Maindiv };
