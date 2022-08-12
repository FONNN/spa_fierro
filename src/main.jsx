import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { firebaseConnect } from './firebase/config'

firebaseConnect()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
