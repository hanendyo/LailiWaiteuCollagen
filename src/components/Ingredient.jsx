import React from "react";
import styled from "styled-components";
import { ingredientItems } from "../data";

const Ingredient = () => {
  return (
    <Container>
      <ImageWrapper>
        <ContentTitle>
          Ada KANDUNGAN PREMIUM dalam WAITEU HIGH BEAUTY COLLAGEN
        </ContentTitle>
        <ContentPhaseIngredient>
          {ingredientItems.map((item) => (
            <ContentImageWrapper key={item.id}>
              <ContentImage src={require(`../assets${item.img}`)} />
              <ContentImageTitle>{item.name}</ContentImageTitle>
              <ContentImageDesc>{item.desc}</ContentImageDesc>
            </ContentImageWrapper>
          ))}
        </ContentPhaseIngredient>
      </ImageWrapper>
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
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  letter-spacing: 1px;
  width: 100%;
`;

const ContentImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: contain;
  background-color: rgba(255, 152, 153, 0.3);
  border-radius: 50%;
  @media (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

const ContentImageWrapper = styled.div`
  text-align: center;
  flex: 0 0 33.3%;
  @media (max-width: 600px) {
    flex: 1;
  }
`;

const ContentImageTitle = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: 600;
  //   margin: 5px 50px;
  //   background-color: rgba(255, 152, 153, 0.3);
  padding: 10px;
`;
const ContentImageDesc = styled.p`
  font-size: 20px;
  color: #aaa;
  font-weight: 600;
  margin: 5px 50px;
  padding: 10px;
`;

const ContentPhaseIngredient = styled.div`
  display: flex;
  flex-wrap: wrap;
}
`;
const ContentTitle = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  margin: 0px 0px 20px 0;
  text-align: center;
  text-justify: inter-word;
  background-color: rgba(255, 152, 153, 0.7);
  padding: 5px;
`;

export default Ingredient;
