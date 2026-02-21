import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.tsx'

// Initialize Google Analytics
ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID) // Replace with your Google Analytics Measurement ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
