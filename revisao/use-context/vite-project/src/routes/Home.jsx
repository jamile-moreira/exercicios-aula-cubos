import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1>Página inicial</h1>
      <p></p>
    </div>
  )
}

export default Home
