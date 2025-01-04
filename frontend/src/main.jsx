// Polyfill for `global`
if (typeof global === "undefined") {
  window.global = window;
}

import process from 'process';
import { Buffer } from 'buffer';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.process = process;
window.Buffer = Buffer;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
