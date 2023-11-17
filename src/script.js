function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    const result = document.getElementById('result');
    if (!isNaN(num1) && !isNaN(num2)) {
      const product = num1 * num2;
      result.textContent = `Result: ${product}`;
    } else {
      result.textContent = 'Invalid input! Please enter valid numbers.';
    }
  }
  