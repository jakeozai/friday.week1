const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');

// Generates one set of 6 unique numbers
function generateSingleSet() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    // Sort the numbers for a cleaner look
    return Array.from(numbers).sort((a, b) => a - b);
}

// Generates 5 sets of lottery numbers
function generateLottoSets() {
    const sets = [];
    for (let i = 0; i < 5; i++) {
        sets.push(generateSingleSet());
    }
    return sets;
}

// Displays the 5 sets of numbers
function displaySets(sets) {
    numbersContainer.innerHTML = ''; // Clear previous sets
    sets.forEach(set => {
        const setContainer = document.createElement('div');
        setContainer.classList.add('number-set');
        
        set.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            setContainer.appendChild(numberElement);
        });
        
        numbersContainer.appendChild(setContainer);
    });
}

generateBtn.addEventListener('click', () => {
    const lottoSets = generateLottoSets();
    displaySets(lottoSets);
});

// Initial generation
const initialSets = generateLottoSets();
displaySets(initialSets);
