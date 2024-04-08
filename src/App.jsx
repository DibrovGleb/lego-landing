import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import { useState, useEffect } from 'react';
function App() {
  const [width, setwidth] = useState(window.innerWidth<=1300),
        [small, setSmall] = useState(window.innerWidth<=860),
        [little, setLittle] = useState(window.innerWidth<=700)

  const handleResize = () =>{
    setwidth(window.innerWidth<=1300) 
    setSmall(window.innerWidth<=860)
    setLittle(window.innerWidth<=700)
  }

  useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])

  return (
    <>
      <Header width={width} small={small} little={little}/>
      <Main width={width} small={small}/>
    </>
  )
}

export default App
