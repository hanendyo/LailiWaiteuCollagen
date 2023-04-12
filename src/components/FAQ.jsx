import React from "react";
import { FAQItems } from "../data";
import styled from "styled-components";

const FAQ = () => {
  return (
    <Container>
      <Wrapper>
        <FaqTitle>Hal-hal yang sering ditanyakan (FAQ)</FaqTitle>
        {FAQItems.map((item) => (
          <FaqWrapper key={item.id}>
            <FaqQuestion>Q: {item.q}</FaqQuestion>
            <FaqAnswer>A: {item.a}</FaqAnswer>
          </FaqWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  letter-spacing: 1px;
  width: 100%;
`;
const FaqWrapper = styled.div`
  text-align: left;
  align-self: center;
`;

const FaqTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  margin: 0px 0px 20px 0;
  text-align: center;
  text-justify: inter-word;
  background-color: rgba(255, 152, 153, 0.7);
  padding: 5px;
`;

const FaqQuestion = styled.p`
  font-size: 20px;
  margin: 0px 0px 20px 0;
  color: rgb(255, 152, 153);
  font-weight: 600;
  padding: 10px;
  background-color: rgba(255, 152, 153, 0.1);
  max-width: 120vh;
`;
const FaqAnswer = styled.p`
  font-size: 20px;
  margin: 0px 0px 20px 0;
  //   color: rgb(255, 152, 153);
  font-weight: 600;
  padding: 10px;
  background-color: rgba(255, 152, 153, 0.1);
  max-width: 120vh;
`;

export default FAQ;
