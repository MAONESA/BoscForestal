// src/main.jsx
import React from 'react'                    // solo por claridad; con la nueva transform ya no es obligatorio
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>        {/* activa checks extra en desarrollo */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
