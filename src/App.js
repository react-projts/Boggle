import React, { useState } from "react";
import { createContext } from "react";
import GlobalStyle from "./components/GlobalStyle";

import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <GlobalStyle />
        <div>
          <Navbar />
          <Routes />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
