import React from "react";
import '/src/global.css'

export default function Main(props) {
    

    
    function freezeDie(event) {




        props.setAllDice((prevAllDice) =>
            prevAllDice.map((prevDie) => {
            if (prevDie.id === event.target.id) {
                console.log(prevDie.id + ' ' + event.target.id )
                
                return {
                    id: prevDie.id,
                    number: prevDie.number,
                    freeze: (!prevDie.freeze),
                };
            } else {
                // console.log(prevDie.id + ' ' + event.target.id )
            return {
                ...prevDie
            }
        }

        }
            ))


    }


    const diceElements = props.dice.map((die, index) => 
    <div 
        className={`die ${die.freeze ? "freeze" : ""}`}
        
        id={"id" + index.toString()} 
        value={props.dice[index].number} 
        key={props.dice[index].id} 
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


