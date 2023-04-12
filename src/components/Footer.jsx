import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={require("../assets/images/title.png")}></Logo>
        </LogoWrapper>
        <AddressWrapper>
          <AddressTitle>Alamat</AddressTitle>
          <AddressDesc>
            Griya Waringin Elok A8 no.3, Des. Cimanggis, Kec. Bojonggede, Kab.
            Bogor.
          </AddressDesc>
        </AddressWrapper>
        <ContactWrapper>
          <ContactTitle>Kontak</ContactTitle>
          <ContactDesc>WhatsApp: 0859-0042-6419</ContactDesc>
        </ContactWrapper>
        <SocialMediaWrapper>
          <SocialMediaTitle>Official Page dan Media Sosial</SocialMediaTitle>
          <LinkWrapper>
            <SocialMediaLink
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              href="https://www.youtube.com/@lailipur/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </SocialMediaLink>
            <SocialMediaLink
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              href="https://www.facebook.com/lailibeautycenter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </SocialMediaLink>
            <SocialMediaLink
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              href="https://www.instagram.com/lailipur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialMediaLink>
          </LinkWrapper>
        </SocialMediaWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #000;
  box-sizing: border-box;
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  letter-spacing: 1px;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;
const LogoWrapper = styled.div`\
    flex: 1;
    display: flex;
    height: 100%;
    text-align: center;
    justify-content: center;
    @media (max-width: 600px) {
        display: none;
      }
`;
const Logo = styled.img`
  max-height: 150px;
  max-width: 150px;
  margin: auto;
`;
const AddressWrapper = styled.div`
  flex: 1;
  height: 100%;
  align-content: center;
  padding-top: 50px;
`;
const AddressTitle = styled.p`
  font-size: 20px;
  color: #ff9899;
`;
const AddressDesc = styled.p`
  font-size: 20px;
  color: #fff;
`;

const ContactWrapper = styled.p`
  flex: 1;
  height: 100%;
  padding-top: 50px;
`;
const ContactTitle = styled.p`
  font-size: 20px;
  flex: 1;
  color: #ff9899;
`;
const ContactDesc = styled.p`
  font-size: 20px;
  flex: 1;
  color: #fff;
`;
const SocialMediaWrapper = styled.p`
  flex: 1;
  height: 100%;
  flex-direction: column;
  padding-top: 50px;
`;
const SocialMediaTitle = styled.p`
  font-size: 20px;
  flex: 1;
  color: #ff9899;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const SocialMediaLink = styled.a`
  font-size: 20px;
  flex: 1;
  color: #fff;
`;

export default Footer;
