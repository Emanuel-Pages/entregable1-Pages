document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los inputs
    let amount = document.getElementById('amount').value;
    let interest = document.getElementById('interest').value;
    let years = document.getElementById('years').value;

    // Convertir porcentajes
    interest = interest / 100;

    // Calcular el monto total a pagar y la cuota mensual
    let total = amount * (1 + (interest * years));
    let monthlyPayment = total / (years * 12);

    // Guardar datos en localStorage
    localStorage.setItem('loanData', JSON.stringify({amount, interest, years, total, monthlyPayment}));

    // Mostrar resultado en el DOM
    document.getElementById('result').innerHTML = `
        <h3>Resultado del Préstamo</h3>
        <p>Monto total a pagar: $${total.toFixed(2)}</p>
        <p>Pago mensual: $${monthlyPayment.toFixed(2)}</p>
    `;
});
