const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit );

function onFormSubmit(event) {
    // event.preventDefault();
    event.currentTarget.elements;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert ('Будь ласка, заповніть всі поля');
    } else {
        const formData = {
            email,
            password,
        };

        console.log(formData);
        console.log('Thank you for creating your account');
        form.reset();
    }
};
