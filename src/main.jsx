import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from "./App(1).jsx"
import App2 from './App(2)'
import App3 from './App(3)'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <App1 /> */}
  </StrictMode>,
)
