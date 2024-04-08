import { ThemeProvider } from './utils/context/themeContext.tsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
