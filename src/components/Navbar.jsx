import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme }) => {
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <HomeButton>Boggle 🔎</HomeButton>
        </Link>
      </div>
      <button onClick={toggleTheme}>shift</button>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 2px solid #d3d3d3;
`;

const HomeButton = styled.nav`
  background-color: #2196f3;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  padding: 5px;
`;

export default Navbar;
