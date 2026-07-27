import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './COMPONENTS/Navbar'
import Mainpage from './PAGES/Mainpage'
import About from './PAGES/About'
import Connect from './PAGES/Connect'
import Video from './PAGES/Video'
import Experience from './PAGES/Experience'
import './App.css'
import './html.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Mainpage />
      <About />
      <Video />
      <Experience />
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-5xl font-bold text-blue-500">
        Tailwind CSS is Working! 🚀
      </h1>
      </div>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <Connect />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
