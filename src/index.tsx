import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const container = document.getElementById('root') as HTMLElement

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

}
else {
  console.error('Root element with id "root" not found.');
}

