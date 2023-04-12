import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlined />
      </Arrow> */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={require("../assets/images/waiteu_title.png")} />
            </ImageContainer>
            <InfoCotainer>
              <SubTitle>{item.subtitle}</SubTitle>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <a
                style={{ textDecoration: "none" }}
                href="http://api.whatsapp.com/send?phone=6285900426419&amp;text=Halo%20Ms%20Yani%2C%20aku%20mau%20mulai%20fase%20pemutihan%20dengan%20WAITEU%20High%20Beauty%20Collagen%20Drink.%20Bisa%20dibantu%20pesananku%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <b>ORDER SEKARANG</b>
                </Button>
              </a>
            </InfoCotainer>
          </Slide>
        ))}
      </Wrapper>
      {/* <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined />
      </Arrow> */}
    </Container>
  );
};

const SubTitle = styled.p`
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 3px;
`;

const Title = styled.h1`
  font-size: 130px;
  margin-top: -30px;
  @media (max-width: 600px) {
    font-size: 100px;
  }
`;
const Desc = styled.p`
  margin: 0px 0px 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 20px;
  font-size: 30px;
  background-color: transparent;
  border: 2px solid white;
  cursor: pointer;
  color: white;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  display: flex;
  alighn-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const InfoCotainer = styled.div`
  padding: 250px 0px;
  flex: 1;
  color: #fff;
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
    padding: 300px 0px;
    flex: initial;
  }
`;

const Image = styled.img`
  width: 80%;
  // height: 80%;
  margin-top: 130px;
  padding-left: 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: #ff9899;
  position: relative;
  overflow: hidden;
`;

export default Slider;
