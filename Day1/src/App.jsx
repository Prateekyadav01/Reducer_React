import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Medicine from './Medicine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Medicine/>
    </>
  )
}

export default App
