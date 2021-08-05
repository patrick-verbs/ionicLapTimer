export const msToClockString = (ms: number):string => {
  // Convert ms to seconds
  const hundredths = (ms / 10) % 100
  const seconds = Math.floor(ms / 1000) % 60
  const minutes = Math.floor(ms / 60000) % 60

  const printHundredths = (hundredths < 10)
    ? `0${hundredths}` 
    : hundredths

  const printSeconds = (seconds < 10)
    ? `0${seconds}` 
    : seconds
  
  function annexZero(time: number) {
    return (time < 10) ? `0${time}` : time
  }

  return `${minutes}:${annexZero(seconds)}:${annexZero(hundredths)}`
}