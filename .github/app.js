document.addEventListener('DOMContentLoaded', function () {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');
  const opEl = document.getElementById('operators');
  const resultEl = document.getElementById('result');
  const equalsBtn = document.getElementById('equalsBtn');

  function calculate() {
    const a = parseFloat(num1El.value);
    const b = parseFloat(num2El.value);
    const operator = opEl.value;

    if (isNaN(a) || isNaN(b)) {
      resultEl.textContent = 'Please enter numbers';
      return;
    }

    let r;
    switch (operator) {
      case '+': r = a + b; break;
      case '-': r = a - b; break;
      case '*': r = a * b; break;
      case '/': r = (b === 0) ? 'Error: divide by 0' : a / b; break;
      default: r = '...';
    }

    if (typeof r === 'number') {
      r = Math.round((r + Number.EPSILON) * 100000) / 100000;
    }

    resultEl.textContent = r;
  }

  equalsBtn.addEventListener('click', calculate);
});
