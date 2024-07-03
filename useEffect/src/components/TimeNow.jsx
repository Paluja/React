import React from 'react'
import { useEffect,useState } from 'react'


function TimeNow() {
  const [time,setTime] = useState(
    {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    }
  )
  
  useEffect(() => {
    console.log('mas un segundo')
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours:now.getHours(),
        minutes:now.getMinutes(),
        seconds:now.getSeconds(),
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, []) //si pones time se ejecuta cada segundo, asi solo dos veces
  
  return (
    <div>
      <p> H : {time.hours} M: {time.minutes} S:{time.seconds}</p>
    </div>
  )
}

export default TimeNow

