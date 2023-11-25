import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './styles/index.css'


const doc = window.document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(doc).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
