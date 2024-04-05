import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import { useState, useEffect } from 'react';
function App() {
  const [width, setwidth] = useState(false)
  const handleResize = () =>setwidth(window.innerWidth<1290)


  useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => {
          document.removeEventListener('resize', handleResize)
      }
  }, [])

  return (
    <>
      <Header width={width}/>
      <Main width={width}/>
    </>
  )
}

export default App
