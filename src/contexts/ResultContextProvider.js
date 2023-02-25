import React, { createContext, useContext, useState } from "react";
import mock from "../mock";

const apiKey = "AIzaSyCyvDD8YQpDE8W7R4DDPPh0-bxhk0uKbQg";
const searchEngineKey = "8353ce6394a784324";
const baseUrl = "https://customsearch.googleapis.com/customsearch/v1";

// const url2 = `${baseUrl}?cx=${searchEngineKey}&q${searchTerm}$key${apiKey}`;

// const term = "elon musk";
// const image = "&searchType=image";
const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (term, type) => {
    setIsLoading(true);

    const response = await fetch(
      `https://customsearch.googleapis.com/customsearch/v1?cx=8353ce6394a784324&key=AIzaSyCyvDD8YQpDE8W7R4DDPPh0-bxhk0uKbQg&q=${searchTerm}${type}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();

    // const data = mock;

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
