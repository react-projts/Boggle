import React from "react";
import { Puff } from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledLoader>
      <Puff color="#00BFFF" height={550} width={80} />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export default Loading;
