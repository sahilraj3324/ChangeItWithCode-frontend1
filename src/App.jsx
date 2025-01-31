import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Front from './components/Content/Frontpage/Front'

function App() {


  return (
    <>
    <div className='bg-gray-100'>
    <Navbar />
    <Front />
    </div>
    
    </>
  )
}

export default App
