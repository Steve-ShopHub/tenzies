

import { useEffect, useState } from 'react'
import '/src/global.css'
import Main from './Main'


function App() {

  const [allDice, setAllDice] = useState([])

  const [win, setWin] = useState(false);

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function initialize() {

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

function gameWin() {
  setWin(true);
  const partyHorn = new Audio("src/assets/party-horn.mp3");
  partyHorn.play();
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


function gameRestart() {
  setAllDice([]);
  initialize();
  setWin(false);


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
      win={win}
      restart={gameRestart}
      
      />
    </div>
  )
}

export default App
