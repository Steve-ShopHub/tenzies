

import { useEffect, useState } from 'react'
import '/src/global.css'
import Main from './Main'
// import nextId from "react-id-generator";

function App() {

  const [allDice, setAllDice] = useState([])

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function initialize() {
  if (allDice.length === 0) {
    let dieArr = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = generateRandomNumber();
      dieArr.push({
        id: `id${dieArr.length}`,
        number: randomNumber,
        freeze: false,
      });
    }
    setAllDice(dieArr);
    console.log(dieArr);
    
  }
}

function gameWin() {
  alert('You win!')
}

function checkWin() {
  if (allDice.length === 0) { 
    return
  }
  const firstDieValue = allDice[0].number;
  for (let i = 1; i < allDice.length; i++) {
    if (allDice[i].number !== firstDieValue) {
      return;
    }
  }
  gameWin();
}


function allNewDice() {

  

  if (allDice.length === 0) {
    initialize();
    
  }
  
  else {
    
    setAllDice((prevAllDice) =>
      prevAllDice.map((prevDie) => {
        const randomNumber = generateRandomNumber();        
        return prevDie.freeze === true ? {...prevDie} : {...prevDie, number: randomNumber};

      })
    );
  }
}
  useEffect(() => {allNewDice()}, [])

  useEffect(() => {checkWin()}, [allDice])


  return (
    <div className="App">
      <Main 
      dice={allDice}
      newDice={allNewDice}
      setAllDice={setAllDice}
      
      />
    </div>
  )
}

export default App
