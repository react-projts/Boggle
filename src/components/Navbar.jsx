import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <Wrapper>
      <StyledNav>
        <div>
          <Link to="/">
            <HomeButton>Boggle 🔎</HomeButton>
          </Link>
        </div>
        <StyledButton onClick={toggleTheme}>
          {theme.id === "light" ? "Dark 🌙" : "Light 💡"}
        </StyledButton>
      </StyledNav>
      <Search />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: ${(props) =>
    props.theme.id === "light"
      ? "3px solid rgb(229 231 235)"
      : "3px solid rgb(55 65 81)"};
`;

const HomeButton = styled.nav`
  background-color: #2196f3;
  background-color: ${(props) =>
    props.theme.id === "light" ? "#2196f3" : "rgb(107 114 128)"};
  font-weight: bold;
  color: ${(props) => (props.theme.id === "light" ? "white" : "black")};
  border-radius: 8px;
  padding: 5px;
`;

const StyledButton = styled.button`
  border: 2px solid grey;
  border-radius: 17px;
  padding: 5px;
  background-color: ${(props) =>
    props.theme.id === "light" ? "#000B1B" : "white"};
  color: ${(props) => (props.theme.id === "light" ? "white" : "black")};
`;

export default Navbar;
