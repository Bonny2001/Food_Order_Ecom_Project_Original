import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/Features/ContexProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
