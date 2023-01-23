import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/apiSlice';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </StrictMode>
);
