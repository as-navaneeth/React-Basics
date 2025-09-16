import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './count.jsx'
import Counter2 from './CountClass.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <Counter2 />
  </StrictMode>,
)
  