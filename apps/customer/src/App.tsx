import React, { useState } from 'react'
import { HelloWorld, makeThunkFetch } from 'test-one';
import logo from './logo.svg'
import './App.scss'

function App() {
	const [count, setCount] = useState(0)
	makeThunkFetch();

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hello Vite + React! ssss</p>
              <HelloWorld />
              <p>
                  <button onClick={() => setCount((count) => count + 1)}>
                      count is: {count}
                  </button>
              </p>
              <p>
                  Edit <code>App.tsx</code> and asdfasdf asd asdfsa as save to
                  test HMR updates.
              </p>
              <p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
                  {' | '}
                  <a
                      className="App-link"
                      href="https://vitejs.dev/guide/features.html"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Vite Docs
                  </a>
              </p>
          </header>
      </div>
  );
}

export default App
