import React from "react";
import styled from "styled-components";
import { listItems } from "../data";

const Points = () => {
  return (
    <Container>
      <OrderImageWrapper>
        <ListTitle>Kenapa harus WAITEU High Beauty Collagen Drink?</ListTitle>
        <OrderedList>
          {listItems.map((item) => (
            <List>{`${item.text}`}</List>
          ))}
        </OrderedList>
        <OrderImage
          class="produk"
          src={require("../assets/images/produk_3.png")}
        />
      </OrderImageWrapper>
    </Container>
  );
};
const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 50px 50px;
  background-color: rgb(255, 152, 153);
  position: relative;
  overflow: hidden;
`;
const ListTitle = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  margin: 0px 0px 20px 0;
  text-align: center;
  text-justify: inter-word;
  padding: 5px;
`;
const OrderedList = styled.ol`
  padding: 30px 50px;
`;
const List = styled.li`
  font-size: 20px;
  margin: 0px 0px 20px 0;
  font-weight: 500;
  text-align: justify;
  text-justify: inter-word;
  justify-content: center;
  color: #fff;
`;
const OrderImage = styled.img`
  width: 550px;
  position: absolute;
  top: 200px;
  left: 120vh;
  @media (max-height: 705px) {
    display: none;
  }
`;

const OrderImageWrapper = styled.div``;
export default Points;
