import React from 'react';

import './chrono.css';

export default function Chrono() {
  const span = document.getElementsByClassName('chrono-span');
  const btnStart = document.getElementById('start');
  const btnStop = document.getElementById('stop');

  let time;
  let ms = 0,
    s = 0,
    mn = 0,
    h = 0;

  // La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start"

  function start() {
    time = setInterval(update_chrono, 100);
    btnStart.disabled = true;
  }

  //La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100

  function update_chrono() {
    ms += 1;
    //si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes
    if (ms === 10) {
      ms = 1;
      s += 1;
    }
    //on teste si s=60 pour incrémenter le nombre de minute
    if (s === 60) {
      s = 0;
      mn += 1;
    }
    if (mn === 60) {
      mn = 0;
      h += 1;
    }
    // afficher les nouvelles valeurs
    span[0].innerHTML = h + ' h ';
    span[1].innerHTML = mn + ' min ';
    span[2].innerHTML = s + ' s ';
    span[3].innerHTML = ms + ' ms ';
  }
  //on arrête le "timer" par clearInterval ,on réactive le bouton start

  function stop() {
    clearInterval(time);
    btnStop.disabled = false;
    btnStart.disabled = false;
  }

  // dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro

  function reset() {
    clearInterval(time);
    btnStart.disabled = false;
    (ms = 0), (s = 0), (mn = 0), (h = 0);
    // on accède aux différents span par leurs indice

    span[0].innerHTML = h + ' h ';
    span[1].innerHTML = mn + ' min ';
    span[2].innerHTML = s + ' s ';
    span[3].innerHTML = ms + ' ms ';
  }

  return (
    <div className={'placement-chrono'}>
      <h2 className="h2-timer">TIMER</h2>
      <div className="chronometre">
        <div className="time">
          <span className="chrono-span"> 0 h </span>
          <span className="chrono-span"> 0 m </span>
          <span className="chrono-span"> 0 s </span>
          <span className="chrono-span hidden"> 0 ms </span>
        </div>
        <button id="start" onClick={start}>
          Start
        </button>
        <button id="stop" onClick={stop}>
          Stop
        </button>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
