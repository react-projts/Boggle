import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

import Navbar from "./components/Navbar";
import PageRouter from "./components/PageRouter";
import Footer from "./components/Footer";

const App = () => {
  const darkTheme = {
    id: "dark",
    background: "#000B1B",
    color: "white",
  };

  const lightTheme = {
    id: "light",
    background: "rgb(243 244 246)",
    color: "black",
  };

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme.id === "dark") {
      setTheme({
        ...lightTheme,
      });
    } else {
      setTheme({
        ...darkTheme,
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <div>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <PageRouter />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
