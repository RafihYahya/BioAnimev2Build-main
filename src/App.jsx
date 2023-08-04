import { useState } from 'react'
import Head from './pages/Head'
import Navbar from './Components/Navbar'
import {Route , Routes} from 'react-router-dom'
import Content from './pages/Content'
import Contact from './Components/Contact'
import Schedule from './pages/Schedule'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
          < Route path='/' element={<Head />}/>
      </Routes>
      <Routes>
          < Route path='/:id/:num' element={<Content />}/>
      </Routes>
      <Routes>
          < Route path='/Schedule' element={<Schedule />}/>
      </Routes>
     
      < Contact />
    </>
  )
}

export default App
