import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'

const root = document.getElementById('root')!

// https://i.imgur.com/iPTAdYV.png - Night time img
root.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")'
root.style.backgroundSize = 'cover'
root.style.backgroundRepeat = 'no-repeat'
root.style.backgroundPosition = 'center'
root.className = 'h-screen w-screen'

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
