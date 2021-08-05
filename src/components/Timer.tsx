import { IonButton, IonCard, IonList, IonItem, IonLabel } from '@ionic/react'
import { useEffect, useCallback, useState } from 'react'
import { msToClockString } from '../utilities/printTime'

const Timer: React.FC = () => {
  const [ms, setMs] = useState(0) 
  const [isRunning, setIsRunning] = useState(false) // Defines isRunning as a boolean
  const [buttonText, setButtonText] = useState(["Start", "Reset"])
  const [lapTimes, setLapTimes] = useState([0])

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

  let lapTimesReadoutString = ``
  for (let i = 1; i < lapTimes.length; i++) {
    lapTimesReadoutString += `${lapTimes[i]}<br></br>`
  }

  const resetOrLap = () => (
    isRunning
    ? (
      lapTimes.push(ms - lapTimes.reduce((accumulator, currentValue) => accumulator + currentValue, 0)),
      setLapTimes(lapTimes), console.log(lapTimes)
    )
    : (
      setMs(0),
      setLapTimes([0])
    )
  )

  return (
    <div>
      <h1>{msToClockString(ms)}</h1>
      <IonButton onClick={isRunningToggle}>{buttonText[0]}</IonButton>
      <IonButton onClick={resetOrLap}>{buttonText[1]}</IonButton>
      <IonCard>
        <IonList>
          {lapTimes.map((lapTime, index)=>{
            return <IonItem key={index}><IonLabel>{lapTime}</IonLabel></IonItem>
          })}
        </IonList>
      </IonCard>
    </div>
  )
}

export default Timer