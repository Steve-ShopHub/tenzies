import React, { useState } from "react";
import '/src/global.css'
import WinConfetti from './WinConfetti'





export default function Main(props) {
    
    // function freezeDie(event) {
    //   console.log(event)
    //   // const targetId = event.currentTarget.id
    //     props.setAllDice((prevAllDice) =>
    //         prevAllDice.map((prevDie) => {
    //         return prevDie.id === event.target.id ? {...prevDie, freeze: (!prevDie.freeze)} : {...prevDie}}
    //         ))
    //         console.log(props.dice)
    //         console.log(event.target)
            
    // }

    

    function freezeDie(event) {
      const targetId = event.currentTarget.id;
      console.log(targetId);
      props.setAllDice((prevAllDice) =>
        prevAllDice.map((prevDie) =>
          prevDie.id === targetId ? {...prevDie, freeze: !prevDie.freeze} : prevDie
        )
      );
      console.log(props.dice);
      console.log(event.currentTarget);
    }


    const numToWordArr = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten"]



    const diceElements = props.dice.map(function(die, index) { 
        const targetDie = props.dice[index]
        
       

        


    //     return (
    //       <div
    //         className={`cube show-${numToWordArr[targetDie.number]} ${die.freeze ? "freeze" : ""}`}
    //         id={"id" + index.toString()}
    //         value={targetDie.number}
    //         key={targetDie.id}
    //         onClick={(event) => freezeDie(event)}
    //       >
    //         <div className={"cube__face cube__face--one first-face" `${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--one'}>
    //           <span className="pip"></span>
    //         </div>
    //         <div className="cube__face cube__face--two second-face" key={targetDie.id + 'face--two'}>
    //           <span className="pip"></span>
    //           <span className="pip"></span>
    //         </div>
    //         <div className="cube__face cube__face--three third-face" key={targetDie.id + 'face--three'}>
    //           <span className="pip"></span>
    //           <span className="pip"></span>
    //           <span className="pip"></span>
    //         </div>
    //         <div className="cube__face cube__face--four fourth-face" key={targetDie.id + 'face--four'}>
    //           <div className="column">
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //           </div>
    //           <div className="column">
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //           </div>
    //         </div>
    //         <div className="cube__face cube__face--five fifth-face" key={targetDie.id + 'face--five'}>
    //           <div className="column">
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //           </div>
    //           <div className="column">
    //             <span className="pip"></span>
    //           </div>
    //           <div className="column">
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //           </div>
    //         </div>
    //         <div className="cube__face cube__face--six sixth-face" key={targetDie.id + 'face--six'}>
    //           <div className="column">
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //           </div>
    //           <div className="column">
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //             <span className="pip"></span>
    //           </div>
    //         </div>
    //       </div>
    //     );

    // })


    return (
      <div
        className={`cube show-${numToWordArr[targetDie.number]} ${die.freeze ? "freeze" : ""}`}
        id={"id" + index.toString()}
        value={targetDie.number}
        key={targetDie.id}
        onClick={(event) => freezeDie(event)}
      >
        <div className={`cube__face cube__face--one first-face ${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--one'}>
          <span className="pip"></span>
        </div>
        <div className={`cube__face cube__face--two second-face ${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--two'}>
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className={`cube__face cube__face--three third-face ${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--three'}>
          <span className="pip"></span>
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className={`cube__face cube__face--four fourth-face ${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--four'}>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
        <div className={`cube__face cube__face--five fifth-face ${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--five'}>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
        <div className={`cube__face cube__face--six sixth-face ${die.freeze ? "freeze" : ""}`} key={targetDie.id + 'face--six'}>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
      </div>
    )
    })

  //   const diceElements = props.dice.map(function(die, index) { 
  //     const targetDie = props.dice[index]
      
  //     return (
  //     <div 
  //         className={`die ${die.freeze ? "freeze" : ""}`}        
  //         id={"id" + index.toString()} 
  //         value={targetDie.number} 
  //         key={targetDie.id} 
  //         onClick={(event) => freezeDie(event)}>{targetDie.number}

  //     </div>
  //     )
  // })


    return (

        <div className="frame">
          <WinConfetti win={props.win}/>
          <div className="screen">
            
            <div className="display">
                <h1 className="title">{!props.win ? "Tenzies" : "You win!"}</h1>
                <h3 className="title">{!props.win ? "Roll until all dice are the same. Click each die to freeze it at its current value between rolls." : ""}</h3>
            </div>

            <div className="dice-container">{diceElements}</div>
            
            {!props.win && <button className="roll-btn" onClick={props.newDice}>Roll</button>}
            {props.win && <button className="win-btn" onClick={props.restart}>Restart</button>}
          </div>
        </div>
      );
    
}


