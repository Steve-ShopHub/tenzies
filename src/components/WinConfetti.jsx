import React, { useEffect, useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function WinConfetti(props){
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()

  useEffect( () => {
    setShowConfetti(props.win)
  }, [props.win]

  )
  
  // const handleWin = () => {
  //   setShowConfetti(props.win)
  // }

  return (
    <div>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  )
}

