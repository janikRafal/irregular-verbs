'use strict';

import verbs from './german_verbs.json' assert { type: 'json' };

const translationInput = document.querySelector('.verb__translation');
const infinitiveInput = document.querySelector('.verb__infinitive');
const imperativeInput = document.querySelector('.verb__imperative');
const pastPerfectInput = document.querySelector('.verb__past_perfect');
const checkButton = document.querySelector('.btn__check');

// translationInput.placeholder = data[0].PL;
// infinitiveInput.placeholder = data[0].verbs[0];
// imperativeInput.placeholder = data[0].verbs[1];
// pastPerfectInput.placeholder = data[0].verbs[2];
// checkButton.innerText = 'Check It!';

console.log(verbs);
