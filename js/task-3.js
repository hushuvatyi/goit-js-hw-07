const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const handleInput = event => {
    const inputValue = event.target.value.trim();
    spanEl.textContent = inputValue === "" ? "Anonimus" : inputValue;
}


inputEl.addEventListener('input', handleInput);