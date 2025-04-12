document.getElementById('calc-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const cityCost = parseInt(document.getElementById('city').value);
    const cost = weight * 200 + cityCost; // Примерная формула
    document.getElementById('result').textContent = `Стоимость: ${cost} руб.`;
});
