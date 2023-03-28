
import { useEffect, useState } from 'react'
import '/src/global.css'
import Main from './Main'
import nextId from "react-id-generator";

function App() {

  const [allDice, setAllDice] = useState([])




function allNewDice() {
  if (allDice.length === 0) {
    let dieArr = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      dieArr.push({
        id: `id${dieArr.length}`,
        number: randomNumber,
        freeze: false,
      });
    }
    setAllDice(dieArr);
    console.log(dieArr);
  } else {
    setAllDice((prevAllDice) =>
      prevAllDice.map((prevDie) => {
        if (prevDie.freeze === true) {
          return {
            id: prevDie.id,
            number: prevDie.number,
            freeze: true,
          };
        } else {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          return {
            id: prevDie.id,
            number: randomNumber,
            freeze: false,
          };
        }
      })
    );
  }
}



  useEffect(() => {
  
    allNewDice();
  
      } , [])


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
