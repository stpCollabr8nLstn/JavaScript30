
const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hrHand = document.querySelector('.hour-hand')

function setClock () {
  const now = new Date()

  const sec = now.getSeconds()
  const min = now.getMinutes()
  const hour = now.getHours()

  const secDeg = calcDegree(sec, 60)
  const minDeg = calcDegree(min, 60)
  const hrDeg = calcDegree(hour, 12)
  
  secHand.style.transform = `rotate(${secDeg}deg)`
  minHand.style.transform = `rotate(${minDeg}deg)`
  hrHand.style.transform = `rotate(${hrDeg}deg)`
}

function calcDegree (unit, totalUnits) {
  return ((unit / totalUnits) * 360) + 90
}


setInterval(setClock, 1000)
setClock()
