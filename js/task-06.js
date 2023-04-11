



const inputEl = document.querySelector('input');
const dataLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const total = event.currentTarget.value.length;
    console.log(total);

    if (total !== parseInt(dataLength)) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    } else {
        
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
}