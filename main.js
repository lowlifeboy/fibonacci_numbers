/* eslint-disable max-len */
'use strict';

function fibonacciNumbers(matrixSize) {
  if (matrixSize > 1) {
    const fibonacciNumbersArr = [0, 1];

    let matrixCountNumbers = 0;
    let countPreviousNumbers = 0;
    let startCount = 0;

    let className = '';

    for (let i = 2; i <= matrixSize; i++) {
      className = `matrix__${i}x${i}`;

      const matrixElem = document.createElement('div');
      matrixElem.className = 'matrix__block ' + className;
      document.getElementsByClassName('matrix').appendChild = matrixElem;
      console.log(matrixElem);

      document.getElementsByClassName('matrix').appendChild = `<div class="matrix__block ${className}"></div>`;
      console.log(document.getElementsByClassName('matrix'));

      matrixCountNumbers = i * i;
      startCount = countPreviousNumbers;
      // countPreviousNumbers += matrixCountNumbers;

      for (countPreviousNumbers; countPreviousNumbers < (startCount + matrixCountNumbers); countPreviousNumbers++) {
        if (countPreviousNumbers > 1) {
          fibonacciNumbersArr.push(fibonacciNumbersArr[countPreviousNumbers - 1] + fibonacciNumbersArr[countPreviousNumbers - 2]);
          document.getElementsByClassName(className).appendChild = `<div class="matrix__item ${className}__item">${fibonacciNumbersArr[countPreviousNumbers]}</div>`;
        }
        document.getElementsByClassName(className).appendChild = `<div class="matrix__item ${className}__item">${fibonacciNumbersArr[countPreviousNumbers]}</div>`;
      }
    }

    console.log(fibonacciNumbersArr.length);
  } else {
    return 'Вы ввели недопустимый размер матрицы. Он должty быть целым, больше 1 и меньше 9. ';
  }
}

console.log(fibonacciNumbers(4));
