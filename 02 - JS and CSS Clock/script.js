function setTime()
{
  const secHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secDeg = (sec/60)*360+90;
  const minDeg = (min/60)*360+90;
  const hourDeg = (hour/24)*360+90;

  secHand.style.transform = `rotate(${secDeg}deg)`
  minHand.style.transform = `rotate(${minDeg}deg)`
  hourHand.style.transform = `rotate(${hourDeg}deg)`

}

setInterval(setTime,1000);
