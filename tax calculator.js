document.getElementById('submit').addEventListener('click', function() {
    // Clear previous errors
    hideErrors();

    // Fetch user inputs
    const age = document.getElementById('age').value;
    const income = parseFloat(document.getElementById('income').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    // Check for mandatory fields
    if (!age) {
        document.getElementById('ageError').style.display = 'inline';
        return;
    }

    // Calculate total income
    const totalIncome = income + extraIncome - deductions;

    // Calculate tax
    let tax = 0;
    if (totalIncome > 800000) {
        if (age === '<40') {
            tax = 0.3 * (totalIncome - 800000);
        } else if (age === '>=40&<60') {
            tax = 0.4 * (totalIncome - 800000);
        } else if (age === '>=60') {
            tax = 0.1 * (totalIncome - 800000);
        }
    }

    // Display result in modal
    const modal = document.getElementById('modal');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = Tax: ${tax.toFixed(2)} Lakhs;
    modal.style.display = 'block';

    // Close modal on close button click
    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

function hideErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
    });
}