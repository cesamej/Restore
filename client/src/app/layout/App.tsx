

import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function App() {

  const[darkMode, setDarkMode]=useState(false);
  const palletType = darkMode ? 'dark': 'light'

  const theme = createTheme({
    palette:{
      mode: palletType,
      background : {
        default: palletType=='light'? "#eaeaea":'#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemCahnge={handleThemeChange}  />
      <Container>
        <Outlet/>
      </Container>
    </ThemeProvider>
  );
}

export default App;

