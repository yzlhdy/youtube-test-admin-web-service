import React from 'react';
// 1. Import the extendTheme function
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })


const App: React.FC = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;