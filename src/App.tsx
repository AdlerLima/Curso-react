import { ThemeProvider } from '@emotion/react';
import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import { LightTheme } from './shared/themes';

function App() {


  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
