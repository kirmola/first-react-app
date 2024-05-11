import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(21)

  return (
    <>
      <Button/>
      <Data/>
    </>
  )
}

export default App
