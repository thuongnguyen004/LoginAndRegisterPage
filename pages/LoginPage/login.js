import { setError, isValidEmail, setSuccess } from "../../assets/js/helpers.js";

const form = document.getElementById('form');
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        alert("Đăng nhập thành công!");
    }
});

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

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
    return isValid;
}

const allInputs = [email, password]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        setSuccess(input);
    })
})