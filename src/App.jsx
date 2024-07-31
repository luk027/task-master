import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Todo from './components/Todo'

const App = () => {
  return (
    
    <div className='flex flex-col min-h-[100vh] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600'>

      <Navbar />

      <div className='flex-[1]'>
        <Todo/>
      </div>

      <Footer />

    </div>
  )
}

export default App