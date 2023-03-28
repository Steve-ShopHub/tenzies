import React from "react";
import '/src/global.css'

export default function Main(props) {
    

    
    function freezeDie() {
        console.log('Clicked die')
    }

    const diceElements = props.dice.map((die, index) => 
    <div 
        className="die" 
        id={"die-" + index.toString()} 
        value={props.dice[index].number} 
        key={index} 
        onClick={(event) => freezeDie(event)}>{props.dice[index].number}
        
    </div>)



    return (

        <div className="frame">
          <div className="screen">
            
            <div className="display">
                <h1 className="title">Tenzies</h1>
                <h3 className="title">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
            </div>

            <div className="dice-container">{diceElements}</div>
            
            <button className="roll-btn" onClick={props.newDice}>Roll</button>
          </div>
        </div>
      );
    

      
      
      
      
}


