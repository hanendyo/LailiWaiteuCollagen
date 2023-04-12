import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>ID</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
          <Logo>WAITEU</Logo>
        </Left>
        <Center>{/* <Logo>WAITEU</Logo> */}</Center>
        <Right>
          <MenuItem>
            <a
              style={{ textDecoration: "none", color: "white", fontSize: 16 }}
              href="http://api.whatsapp.com/send?phone=6285900426419&amp;text=Halo%20Ms%20Yani%2C%20aku%20mau%20mulai%20fase%20pemutihan%20dengan%20WAITEU%20High%20Beauty%20Collagen%20Drink.%20Bisa%20dibantu%20pesananku%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT
            </a>
          </MenuItem>
          {/* <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary" overlap="rectangular">
              <ShoppingBasketOutlined />
            </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Container = styled.div`
  height: 60px;
  background-color: #ff9899;
  position: fixed;
  z-index: 9999;
  width: 100%;
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`;

const Input = styled.div`
  border: none;
  width: 100px;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

export default Navbar;
