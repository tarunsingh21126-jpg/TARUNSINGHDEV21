import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Tester from './Tester'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Tester /> */}
    <App />
  </StrictMode>,
)
