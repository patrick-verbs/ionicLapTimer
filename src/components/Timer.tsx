import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton } from '@ionic/react'
import { useEffect, useCallback, useMemo, useState } from 'react'
import { msToClockString } from '../utilities/printTime'

const Timer: React.FC = () => {
  const [ms, setMs] = useState(0) 
  const [isRunning, setIsRunning] = useState(false) // Defines isRunning as a boolean

  const tick = useCallback(async () => {setMs(ms + 10)}, [ms])

  useEffect(() => {
    const timerId = isRunning ? setInterval(tick, 10) : undefined  
    return () => timerId ? clearInterval(timerId) : undefined
  }, [isRunning, tick])


  return (
    <div>
      <h1>{msToClockString(ms)}</h1>
      <IonButton onClick={()=> setIsRunning(true)}>Start</IonButton>
      <IonButton>Reset</IonButton>
      <br></br>
      <IonButton>Lap</IonButton>
      <IonButton onClick={()=> setIsRunning(false)}>Pause</IonButton>
    </div>
  )
}

export default Timer