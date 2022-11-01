'use strict';

import germanVerbs from './german_verbs.json' assert { type: 'json' };

const randomUnique = (range, amount) => {
  let numbers = new Set();

  while (numbers.size < amount) {
    numbers.add(Math.floor(Math.random() * range));
  }

  return [...numbers];
};

const displayVerb = function () {
  const [translationInput, ...restInputs] =
    document.querySelectorAll('.input__active');

  translationInput.value = germanVerbs[currentIndex].PL;
  restInputs[0].value = germanVerbs[currentIndex].verbs[0];
  restInputs[1].value = germanVerbs[currentIndex].verbs[1];
  restInputs[2].value = germanVerbs[currentIndex].verbs[2];
};

const createInputs = function (verbIndex) {
  const html = `
  <div class="row m-1">
    <div class="col p-1">
      <input
        type="text"
        class="form-control text-light border border-dark rounded input__active"
        style="background-color: #424242"
        disabled
      />
    </div>
    <div class="col p-1">
      <input
        type="text"
        class="form-control text-light border border-dark rounded input__active"
        style="background-color: #424242"
      />
    </div>
    <div class="col p-1">
      <input
        type="text"
        class="form-control text-light border border-dark rounded input__active"
        style="background-color: #424242"
      />
    </div>
    <div class="col p-1">
      <input
        type="text"
        class="form-control text-light border border-dark rounded input__active"
        style="background-color: #424242"
      />
    </div>
    <div class="col-12 p-1">
      <span
        class="d-flex align-items-center justify-content-center help-block border border-danger rounded mb-3 p-2 text-light d-none hint__active"
        style="background-color: #424242"
        >Błędna odpowiedź. Odmiana czasownika: ${germanVerbs[verbIndex].verbs[0]}, ${germanVerbs[verbIndex].verbs[1]}, ${germanVerbs[verbIndex].verbs[2]}</span
      >
    </div>
  </div>
  `;

  inputsContainer.insertAdjacentHTML('beforeend', html);
};

const checkInputs = function (verbIndex) {
  const [translationInput, ...restInputs] =
    document.querySelectorAll('.input__active');
  const hint = document.querySelector('.hint__active');

  let allCorrect = true;

  if (translationInput.value !== germanVerbs[verbIndex].PL) allCorrect = false;

  restInputs.forEach((input, index) => {
    if (input.value !== germanVerbs[verbIndex].verbs[index]) allCorrect = false;
    input.setAttribute('disabled', '');
  });

  if (!allCorrect) {
    hint.classList.remove('d-none');
  }
  hint.classList.remove('hint__active');
  translationInput.classList.remove('input__active');
  restInputs.forEach(input => input.classList.remove('input__active'));

  return allCorrect;
};

const correctField = document.querySelector('.correct');
const incorrectField = document.querySelector('.incorrect');
const verbsCounter = document.querySelector('.verbs__counter');
const inputsContainer = document.querySelector('.inputs__container');
const checkBtn = document.querySelector('.btn__check');

const randomOrder = randomUnique(germanVerbs.length, germanVerbs.length);
let currentIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

createInputs(currentIndex);
displayVerb();

// checkBtn.addEventListener('click', function (e) {
//   console.log('random');

//   if (currentIndex === germanVerbs.length) return;

//   checkInputs(randomOrder[currentIndex])
//     ? correctAnswers++
//     : incorrectAnswers++;

//   correctField.textContent = 'Poprawne: ' + correctAnswers;
//   incorrectField.textContent = 'Niepoprawne: ' + incorrectAnswers;

//   currentIndex++;

//   if (currentIndex === germanVerbs.length) return;

//   translationInput.value = germanVerbs[randomOrder[currentIndex]].PL;
//   restInputs.forEach(
//     (input, index) =>
//       (input.value = germanVerbs[randomOrder[currentIndex]].verbs[index])
//   );
// });

checkBtn.addEventListener('click', function () {
  console.log('not random');

  if (currentIndex === germanVerbs.length) return;

  checkInputs(currentIndex) ? correctAnswers++ : incorrectAnswers++;

  correctField.textContent = 'Poprawne: ' + correctAnswers;
  incorrectField.textContent = 'Niepoprawne: ' + incorrectAnswers;
  verbsCounter.textContent = currentIndex + 1 + '/' + germanVerbs.length;

  currentIndex++;
  if (currentIndex === germanVerbs.length) return;

  createInputs(currentIndex);
  displayVerb();
});

// checkBtn.removeEventListener('click', function);
console.log(germanVerbs);
