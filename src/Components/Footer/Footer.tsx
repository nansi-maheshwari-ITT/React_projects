import styled from "styled-components";
const FooterContainer = styled.div`
  background-color: rgb(22 78 78);
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright @ 2023 Nansi Maheshwari</p>
    </FooterContainer>
  );
};

export default Footer;
