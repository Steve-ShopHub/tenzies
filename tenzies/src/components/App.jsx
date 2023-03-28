
import { useEffect, useState } from 'react'
import '/src/global.css'
import Main from './Main'

function App() {

  const [allDice, setAllDice] = useState([])

//   function allNewDice() {
      
//     setAllDice(() => {
      
//       let dieArr = [];
//       for (let i = 0; i < 10; i++) {
//         if (allDice === []) {
//           const randomNumber = Math.floor(Math.random() * 6) + 1;
//           dieArr.push({
//                     number: randomNumber,
//                     freeze: false
//           });
//           return dieArr;
//       }
//       else if (allDice !== []) {
//         const randomNumber = Math.floor(Math.random() * 6) + 1;
//         setAllDice (prevAllDice => function() {
//           return (
//             prevAllDice.map(prevDie => {
//               if (prevDie.freeze === true) {
//                 return {
//                   number: prevDie.number,
//                   freeze: true            
//                 }
//               } else return {
//                 number: randomNumber,
//                 freeze: false            
//               } 
//             }
//               ))
//           }
//           )
//         }
          
          

//     }

      
//   })
// }


function allNewDice() {
  if (allDice.length === 0) {
    let dieArr = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      dieArr.push({
        number: randomNumber,
        freeze: false,
      });
    }
    setAllDice(dieArr);
  } else {
    setAllDice((prevAllDice) =>
      prevAllDice.map((prevDie) => {
        if (prevDie.freeze === true) {
          return {
            number: prevDie.number,
            freeze: true,
          };
        } else {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          return {
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
      
      />
    </div>
  )
}

export default App
