import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

const App = () => {
  const darkTheme = {
    id: "dark",
    background: "grey",
  };

  const lightTheme = {
    id: "light",
    background: "white",
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
          <Navbar toggleTheme={toggleTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
