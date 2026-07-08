import { setError, isValidEmail, setSuccess } from "../../assets/js/helpers.js";

const form = document.getElementById('form');
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm_password')

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        alert("Register successfully!");
        window.location.href = "../LoginPage/login.html";
    }
});

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true;
    if (fullNameValue === '') {
        setError(fullName, 'FullName is required');
        isValid = false;
    } else {
        setSuccess(fullName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'confirmPasswordValue is required');
        isValid = false;
    } else if (confirmPasswordValue != passwordValue) {
        setError(confirmPassword, 'Password does not match');
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }
    return isValid;
}
const allInputs = [fullName, email, password, confirmPassword]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        setSuccess(input);
    })
})