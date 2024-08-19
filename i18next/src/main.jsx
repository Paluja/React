import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18next.js'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { TranslationsProvider } from './contexts/useTranslationsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TranslationsProvider>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </TranslationsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
