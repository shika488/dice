'use strict';

const btn = document.getElementById('btn');
const dice = document.getElementById('dice');

btn.addEventListener('click', () => {
    const num = Math.floor(Math.random() * 6 ) + 1;  //(0~5の数値のどれか)+1=1~6の数値のどれか
    dice.textContent = num;
});
