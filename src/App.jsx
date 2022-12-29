import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from './Hooks/useLocalStorage'

function App() {
    const [currentStr, setCurrentstr] = useState("hello world")
    const [storeData, insert] = useLocalStorage("myKey")
    // console.log("App renders") 
    useEffect(()=> {
      insert(currentStr)
  }, [currentStr]) 

  useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }, [])

   const handleStrChange = () => {
    setCurrentstr( prev => {
      console.log("previous state", prev)
       return crypto.randomUUID() + prev
     })
    }

  return (
    <div className="App" onClick={handleStrChange}>
          {currentStr}
           <br/>
          {"from local store:" + storeData}
    </div>
  )
}

export default App
