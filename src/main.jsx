import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// createRoot(document.getElementById('html')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App2 />
//     </BrowserRouter>
//   </StrictMode>
// )