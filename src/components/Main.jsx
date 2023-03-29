import React from "react";
import '/src/global.css'
import WinConfetti from './WinConfetti'





export default function Main(props) {
    
    function freezeDie(event) {
        props.setAllDice((prevAllDice) =>
            prevAllDice.map((prevDie) => {
            return prevDie.id === event.target.id ? {...prevDie, freeze: (!prevDie.freeze)} : {...prevDie}}
            ))
    }

    const diceElements = props.dice.map(function(die, index) { 
        const targetDie = props.dice[index]
        
        return (
        <div 
            className={`die ${die.freeze ? "freeze" : ""}`}        
            id={"id" + index.toString()} 
            value={targetDie.number} 
            key={targetDie.id} 
            onClick={(event) => freezeDie(event)}>{targetDie.number}

        </div>
        )
    })


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


