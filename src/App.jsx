import { useEffect,useState } from 'react'
import './App.css'
import {ThemeProvider} from './context/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeButton'
function App() {
    const [themeMode,setThemeMode]=useState("light")
  const lightTheme = () => {
      setThemeMode("light")
    }
  const darkTheme = () => {
      setThemeMode("dark")
  }
  
  //actuall change in theme 
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeMode])
    
  
    
  
  return (

    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
                        <Card/>
          </div>
        </div>
      </div>
</ThemeProvider>
  )
}

export default App
