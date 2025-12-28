// Handle Services Link to show Calculator
const servicesLink = document.getElementById('services-link');
const calculatorContainer = document.getElementById('calculator-container');

servicesLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default anchor behavior
    calculatorContainer.style.display = 'block';  // Show the calculator
});

// Calculator Functionality
const calculatorForm = document.getElementById('calculator-form');
const resultValue = document.getElementById('result-value');
const receiptDetails = document.getElementById('receipt-details');

calculatorForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value); // పై సూటు
    const num2 = parseFloat(document.getElementById('num2').value); // కిలోల బరువులో పండ్లు
    const num3 = parseFloat(document.getElementById('num3').value); // డబుల్ సూటు
    const num4 = parseFloat(document.getElementById('num4').value); // రేటు
    const num5 = parseFloat(document.getElementById('num5').value || 0); // Number 5
    

    // Calculation logic
    const c1=num1*num3/1000;
    const c2=(num1-c1)*num4/1000;

    const r1 = num1 * (1000 - num3) / 1000; // పై సూటు పోను పండ్లు
    const r2 = r1 * (1000 - num4) / 1000;  // డబుల్ సూటు పోను పండ్లు
    const result = r2 * num2 / 1000;  // Final result

    const c3=num5*num1/1000;
    // Display result in the calculator section
    resultValue.textContent = result.toFixed(2); // Rounded to 2 decimal places

    // Display a receipt in the receipt section
    receiptDetails.innerHTML = `
         <p>పై సూటు పండ్లు: ${c1}</p>
        <p>పై సూటు పోను పండ్లు: ${r1.toFixed(2)}</p>
        <p>డబుల్ సూటు పండ్లు: ${c2}</p>
        <p>డబుల్ సూటు పోను పండ్లు: ${r2.toFixed(2)}</p>
       
        
        <p>కూళ్లు: ${c3}</p>
        <p>కూళ్లు పోను: ${result.toFixed(2)-c3}</p>
        <p><strong>Total: ${result.toFixed(2)-c3}</strong></p>
    `;
});
