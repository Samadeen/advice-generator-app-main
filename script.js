'use strict';

const adviceNo = document.querySelector('.advice__number');
const adviceEl = document.querySelector('.quotes');
const adviceBtn = document.querySelector('.button-section');

adviceBtn.addEventListener('click', generateAdvice);

generateAdvice();

// USING ASYNC/AWAIT
async function generateAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice', {
    cache: 'no-cache',
  });
  const data = await res.json();

  adviceNo.innerHTML = `advice #${data.slip.id}`;
  adviceEl.innerHTML = data.slip.advice;
}
