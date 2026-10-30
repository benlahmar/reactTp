import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ListProduit from './ListProduit'
import ListFiliere from './Components/listefiliere/ListFiliere'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Test</h1>
     <ListFiliere />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
