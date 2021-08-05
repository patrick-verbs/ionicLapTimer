import { IonButton } from '@ionic/react'
import { useEffect, useCallback, useState } from 'react'
import { msToClockString } from '../utilities/printTime'

const Timer: React.FC = () => {
  const [ms, setMs] = useState(0) 
  const [isRunning, setIsRunning] = useState(false) // Defines isRunning as a boolean
  const [buttonText, setButtonText] = useState(["Start", "Reset"])

  const tick = useCallback(() => {setMs(ms + 10)}, [ms])

  useEffect(() => {
    const timerId = isRunning ? setInterval(tick, 10) : undefined  
    return () => timerId ? clearInterval(timerId) : undefined
  }, [isRunning, tick])

  const isRunningToggle = () => (
    isRunning
    ? (setIsRunning(false), setButtonText(["Start", "Reset"]))
    : (setIsRunning(true), setButtonText(["Pause", "Lap"]))
  )

  const resetOrLap = () => (
    isRunning
    ? setMs(ms)
    : setMs(0)
  )

  return (
    <div>
      <h1>{msToClockString(ms)}</h1>
      <IonButton onClick={isRunningToggle}>{buttonText[0]}</IonButton>
      <IonButton onClick={resetOrLap}>{buttonText[1]}</IonButton>
    </div>
  )
}

export default Timer