import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '@src/index.css';
import Popup from '@src/Popup';
import { /* BrowserRouter, */ HashRouter } from 'react-router-dom';

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <HashRouter>
        <Popup />
      </HashRouter>
    </React.StrictMode>,
  );
}

init();
