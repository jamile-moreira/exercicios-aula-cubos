import './App.css'

// 2. reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <h1>React Router</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
