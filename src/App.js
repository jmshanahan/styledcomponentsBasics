import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { redTheme, blueTheme, greenTheme } from "./components/Themes";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(redTheme);

  const handleTheme = () => {
    if (theme.primaryColor === "red") {
      setTheme(greenTheme);
    } else if (theme.primaryColor === "green") {
      setTheme(blueTheme);
    } else {
      setTheme(redTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar>
          <Button onClick={handleTheme}>Toggle Theme </Button>
        </Navbar>
        <Content />
      </main>
    </ThemeProvider>
  );
}
export default App;
