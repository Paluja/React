import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { BasketProvider } from './contexts/UseBasketContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <Routes>
          <Route path="/*" element={<App/>}/>
        </Routes>
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
