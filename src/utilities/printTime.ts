export const msToClockString = (ms: number):string => {
  // Convert ms to seconds
  const hundredths = (ms / 10) % 100
  const seconds = Math.floor(ms / 1000) % 60
  const minutes = Math.floor(ms / 60000) % 60

  function annexZero(time: number) {
    return (time < 10) ? `0${time}` : time
  }

  return `${annexZero(minutes)}:${annexZero(seconds)}:${annexZero(hundredths)}`
}