import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from './test.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>TODO: create a simple CRUD react app</p>
        <p>like a quotes app</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Ej Sadiarin Vite + React JS App</p>
      <p>created January 23, 2023 10:07 PM</p>
      <p>Happy Birthday to me LESGOWW!!!!!!!</p>
      <p>A start LESGOWW TOP G MODE FOREVER</p>
      <Activate />
      <Test />
    </div>
  )
}

function Activate() {
  return (
    <>
      <h1>My First React Component</h1>
      <p>@ February 6, 2023 9:21 PM</p>
    </>
  );
}

export default App
