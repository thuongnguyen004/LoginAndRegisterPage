
export const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
    errorDisplay.innerText = message;
    inputBox.classList.add('error');

};
export const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');
    errorDisplay.innerText = '';
    inputBox.classList.remove('error');

};
export const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());

};
