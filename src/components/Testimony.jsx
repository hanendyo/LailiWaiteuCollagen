import React, { useState } from "react";
import styled from "styled-components";
import "../css/Testimony.css";

const Testimony = () => {
  let [current, setCurrent] = useState("");
  let [clicked, setClicked] = useState(false);
  let [old, setOld] = useState(null);
  const handleClick = (e) => {
    if (old != null) {
      setClicked(false);
    }
    if ((e.target.className = "thumb")) {
      setCurrent(e.target.src);
      setClicked(true);
    }
    setOld(e.target);
  };
  return (
    <Container>
      <ContentTitle>Apa kata mereka tentang WAITEU?</ContentTitle>

      <div class="container">
        <img
          // src={require(`../assets${current}`)}
          src={current ? current : require("../assets/images/testi_1.jpg")}
          width="500"
          height="500"
          class="jumbo"
        />
        <div class="thumbnail" onClick={(e) => handleClick(e)}>
          <img
            src={require("../assets/images/testi_1.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_2.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_3.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_4.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_5.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_6.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_7.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
          <img
            src={require("../assets/images/testi_8.jpg")}
            width="150"
            height="150"
            class="thumb"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 50px;
  overflow: hidden;
  background-color: rgb(255, 152, 153);
`;

const ContentTitle = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  margin: 0px 0px 20px 0;
  text-align: center;
  text-justify: inter-word;
  background-color: rgb(255, 152, 153);
  padding: 5px;
`;

export default Testimony;
