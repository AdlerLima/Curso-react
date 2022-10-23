import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/themeContext';

export const App = () => {


  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  )
}

