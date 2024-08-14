document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loanForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores de los inputs
        const amount = parseFloat(document.getElementById('amount').value);
        const interest = parseFloat(document.getElementById('interest').value) / 100;
        const years = parseInt(document.getElementById('years').value);

        if(isNaN(amount) || isNaN(interest) || isNaN(years)) {
            alert("Por favor, ingresa valores válidos.");
            return;
        }

        // Calcular el monto total a pagar y la cuota mensual
        const total = amount * (1 + (interest * years));
        const monthlyPayment = total / (years * 12);

        // Guardar datos en localStorage
        const loanData = { amount, interest, years, total, monthlyPayment };
        localStorage.setItem('loanData', JSON.stringify(loanData));

        // Mostrar resultado en el DOM
        document.getElementById('result').innerHTML = `
            <h3>Resultado del Préstamo</h3>
            <p>Monto total a pagar: $${total.toFixed(2)}</p>
            <p>Pago mensual: $${monthlyPayment.toFixed(2)}</p>
        `;
    });
});
