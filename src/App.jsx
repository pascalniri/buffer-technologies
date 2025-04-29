import React from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'
import Clients from './components/Clients'
import Leadership from './components/Leadership'
import Footer from './components/Footer'
import Partners from './components/Partners'

const App = () => {
  return (
    <div className='font-quicksand'>
      <Navbar />
      <HomePage />
      <Partners />
      <WhoWeAre />
      <Services />
      <Clients />
      <Leadership />
      <Footer />
    </div>
  )
}

export default App
