import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return <Container>Super Deal! discount 50% for bundle purchase. </Container>;
};

const Container = styled.div`
  height: 30px;
  background-color: #ff9899;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export default Announcement;
