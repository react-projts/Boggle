import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Wrapper>2023 Boggle, Inc.</Wrapper>;
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-top: ${(props) =>
    props.theme.id === "light"
      ? "3px solid rgb(229 231 235)"
      : "3px solid rgb(55 65 81)"};
`;

export default Footer;
