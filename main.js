/* eslint-disable max-len */
'use strict';

function fibonacciNumbers(matrixSize) {
  if (matrixSize > 1) {
    const fibonacciNumbersArr = [0, 1];

    let matrixCountNumbers = 0;
    let countPreviousNumbers = 0;
    let startCount = 0;

    let className = '';

    const matrix = document.getElementById('matrix');

    for (let i = 2; i <= matrixSize; i++) {
      className = `matrix__${i}x${i}`;

      const matrixBlock = document.createElement('div');
      matrixBlock.className = 'matrix__block ' + className;
      matrix.appendChild(matrixBlock);

      matrixCountNumbers = i * i;
      startCount = countPreviousNumbers;

      for (countPreviousNumbers; countPreviousNumbers < (startCount + matrixCountNumbers); countPreviousNumbers++) {
        const matrixElem = document.createElement('div');
        matrixElem.className = 'matrix__item ' + className + '__item';

        if (countPreviousNumbers > 1) {
          fibonacciNumbersArr.push(fibonacciNumbersArr[countPreviousNumbers - 1] + fibonacciNumbersArr[countPreviousNumbers - 2]);
          matrixElem.innerHTML = fibonacciNumbersArr[countPreviousNumbers];
          matrixBlock.appendChild(matrixElem);
          document.getElementsByClassName(className).appendChild = `<div class="matrix__item ${className}__item">${fibonacciNumbersArr[countPreviousNumbers]}</div>`;
        }
        matrixElem.innerHTML = fibonacciNumbersArr[countPreviousNumbers];
        matrixBlock.appendChild(matrixElem);
        document.getElementsByClassName(className).appendChild = `<div class="matrix__item ${className}__item">${fibonacciNumbersArr[countPreviousNumbers]}</div>`;
      }
    }

    console.log(fibonacciNumbersArr.length);
  } else {
    return 'Вы ввели недопустимый размер матрицы. Он должty быть целым, больше 1 и меньше 9. ';
  }
}

// console.log(document.getElementById('matrix'));

console.log(fibonacciNumbers(4));
