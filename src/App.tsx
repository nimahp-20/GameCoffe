import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
function App() {
  // const [toggleDark, setToggleDark] = useState<boolean>()
  // const [theme, setTheme] = useState<string>()

  // useEffect(() => {
  //   if (toggleDark === true) {
  //     document.documentElement.classList.add('dark')
  //     localStorage.setItem('Theme', 'dark')
  //     setTheme('dark')
  //   } else if (toggleDark === false) {
  //     document.documentElement.classList.remove('dark')
  //     localStorage.setItem('Theme', 'light')
  //     setTheme('light')
  //   }
  // }, [toggleDark, theme])


  return (
    <>
      {/* <div className={`bg-white  ${theme}:bg-gray-900`}>
        <button
          className=" font-MorabbaBold px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => setToggleDark(!toggleDark)}
        >
          Toggle Dark Mode
        </button>
      </div> */}
      <div className="bg-gray-100 dark:bg-zinc-800 min-h-screen">
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </div>
    </>
  )
}

export default App
