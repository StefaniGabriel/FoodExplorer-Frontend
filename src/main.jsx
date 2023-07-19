import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from "./styles/global";

import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import { OrderContextProvider } from "./Provider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
      <AuthProvider>
        <OrderContextProvider>
        <Routes />
        </OrderContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
