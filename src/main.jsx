import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { fireConnect } from './firebase/config'

fireConnect()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
