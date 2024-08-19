import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FilmProvider } from './context/FilmContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilmProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </FilmProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
