import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults();
  }, []);

  if (isLoading) return <Loading />;

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <ItemsWrapper>
          {results?.items?.map(({ link, title }, cacheId) => (
            <div key={cacheId}>
              <a href={link} target="_blank" rel="noreferrer">
                <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                <Title>{title}</Title>
              </a>
            </div>
          ))}
        </ItemsWrapper>
      );
    case "/images":
      return "IMAGES";
    default:
      return "ERROR!";
  }
};

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const Title = styled.p`
  color: rgb(29 78 216);
  font-size: 20px;
  :hover {
    text-decoration: underline;
  }
`;

export default Results;

// DARK
// title text color: rgb(147 197 253);
