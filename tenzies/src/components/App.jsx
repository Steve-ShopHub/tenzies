
import { useEffect, useState } from 'react'
import '/src/global.css'
import Main from './Main'

function App() {

  const [allDice, setAllDice] = useState([])

  function allNewDice() {
      
    setAllDice(() => {
      
      let dieArr = [];
      for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dieArr.push(randomNumber);
      }

      return dieArr
  })
}

  useEffect(() => {
  
    allNewDice();
  
      } , [])


  return (
    <div className="App">
      <Main 
      dice={allDice}
      newDice={allNewDice}
      
      />
    </div>
  )
}

export default App
