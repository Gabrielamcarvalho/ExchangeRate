const btn = document.getElementById('swap');
const rateEL = document.getElementById('rate');
const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

//Fetch exchange rates and update the DOM
const calculate = () => {
const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
    .then(res => res.json())
    .then (data => {
       const rate = data.rates[currency_two];
        rateEL.innerHTML = `1${currency_one} = ${rate} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

//Event Listeners
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('input', calculate);
amountEl_one.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();