import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content'
import Start from './components/Start'
import Journey from './components/Journey'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white w-full h-screen">
      
      <Navbar/>
      <Content/>
      <Start/>
      <Journey/>
      <Footer/>
    </div>
  )
}

export default App