import React from 'react'
import ReactDOM from 'react-dom'
import { testOne } from 'test-one';
import { testTwo } from 'test-two';
import './index.scss'
import App from './App'

testOne();
testTwo();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
