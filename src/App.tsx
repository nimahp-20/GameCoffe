import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
function App() {
  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = 'light'
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [localStorage.theme])


  return (
    <>
      <div className="bg-gray-100 dark:bg-zinc-800 min-h-screen">
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </div>
    </>
  )
}

export default App
