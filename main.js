const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        numbersContainer.appendChild(numberElement);
    });
}

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateNumbers();
    displayNumbers(lottoNumbers);
});

// Initial generation
const initialNumbers = generateNumbers();
displayNumbers(initialNumbers);
