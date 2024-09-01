const form = document.querySelector('.login-form');

const result = {};

const handleSubmit = event => {
    event.preventDefault();
    const formElements = event.target.elements;
    
    if (formElements.email.value.trim() === "" || formElements.password.value.trim() === "") {

        alert('All form fields must be filled in');

    } else {
        result[formElements.email.name] = formElements.email.value;
        result[formElements.password.name] = formElements.password.value;
        form.reset();
    }
    
}

form.addEventListener('submit', handleSubmit);
console.log(result);