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
    if (searchTerm) {
      if (location.pathname === "/images") {
        getResults(searchTerm, "&searchType=image");
      } else {
        getResults(searchTerm, "");
      }
    }
  }, [searchTerm, location.pathname]);

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
      return (
        <ImagesWrapper>
          {results?.items?.map(({ image, contextLink, title }, cacheId) => (
            <div key={cacheId}>
              <GridItem href={contextLink} target="_blank" rel="noreferrer">
                <img src={image?.thumbnailLink} alt="lis images" />
                <p>{title}</p>
              </GridItem>
            </div>
          ))}
        </ImagesWrapper>
      );
    default:
      return "ERROR!";
  }
};

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
`;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
`;

const GridItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
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
