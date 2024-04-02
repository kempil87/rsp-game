import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import '../public/styles/index.css';
import { Provider } from './shared/containers/context-provider/context-provider.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
