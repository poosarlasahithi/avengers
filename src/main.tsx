import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './styles/globals.css'
import { initGSAP } from './lib/gsapConfig.ts'

// Initialize GSAP ScrollTrigger
initGSAP();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
