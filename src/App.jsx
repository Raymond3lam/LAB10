import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Raymond Lam Lab 10 :)</p>
 
      
        <p>
          The framework I used for this webpage is React!
        
        </p>
   
        <Link to="/page1">
          <button>How I built it?</button>
        </Link>

    
    
    </>
  )
}

export default App
