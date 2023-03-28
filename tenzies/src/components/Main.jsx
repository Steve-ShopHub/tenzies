import React from "react";
import '/src/global.css'

export default function Main(props) {
    

    
    return (

        <div className="frame">
          <div className="screen">
            
            <div className="display">
                <h1 className="title">Tenzies</h1>
                <h3 className="title">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
            </div>

            <div className="row">
              <div className="die" id="die-1" value={props.dice[0]}>{props.dice[0]}</div>
              <div className="die" id="die-2" value={props.dice[1]}>{props.dice[1]}</div>
              <div className="die" id="die-3" value={props.dice[2]}>{props.dice[2]}</div>
              <div className="die" id="die-4" value={props.dice[3]}>{props.dice[3]}</div>
              <div className="die" id="die-5" value={props.dice[4]}>{props.dice[4]}</div>
            </div>
            <div className="row">
              <div className="die" id="die-6" value={props.dice[5]}>{props.dice[5]}</div>
              <div className="die" id="die-7" value={props.dice[6]}>{props.dice[6]}</div>
              <div className="die" id="die-8" value={props.dice[7]}>{props.dice[7]}</div>
              <div className="die" id="die-9" value={props.dice[8]}>{props.dice[8]}</div>
              <div className="die" id="die-10" value={props.dice[9]}>{props.dice[9]}</div>
            </div>
            <button className="roll-btn" onClick={props.newDice}>Roll</button>
          </div>
        </div>
      );
      
      
      
      
      
      
}


{/* <div className="row">
<div className="die" id="die-1"  value={props.dice[1]} value={dieArr[0]} >1</div>
<div className="die" id="die-2"  value={props.dice[1]} value={dieArr[1]} >2</div>
<div className="die" id="die-3"  value={props.dice[1]} value={dieArr[2]} >3</div>
<div className="die" id="die-4"  value={props.dice[1]} value={dieArr[3]} >4</div>
<div className="die" id="die-5"  value={props.dice[1]} value={dieArr[4]} >5</div>
</div>
<div className="row">
<div className="die" id="die-6"  value={props.dice[1]} value={dieArr[5]} >6</div>
<div className="die" id="die-7"  value={props.dice[1]} value={dieArr[6]} >7</div>
<div className="die" id="die-8"  value={props.dice[1]} value={dieArr[7]} >8</div>
<div className="die" id="die-9"  value={props.dice[1]} value={dieArr[8]} >9</div>
<div className="die" id="die-10" value={props.dice[1]}  value={dieArr[9]} >10</div>
</div> */}