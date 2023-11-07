
const passwordBox = document.getElementById("password");

// Assignment Code

const lengthInput = document.getElementById("length");
const useUppercaseCheckbox = document.getElementById("useUppercase");
const useLowercaseCheckbox = document.getElementById("useLowercase");
const useNumbersCheckbox = document.getElementById("useNumbers");
const useSpecialCheckbox = document.getElementById("useSpecial");

// listing all the variables
const numbers = "12345567890";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const special = "@%+/'!#$^?:";


// creating the password from the parameters selected by the user
function createPassword() {
    const length = parseInt(lengthInput.value);
    const useUppercase = useUppercaseCheckbox.checked;
    const useLowercase = useLowercaseCheckbox.checked;
    const useNumbers = useNumbersCheckbox.checked;
    const useSpecial = useSpecialCheckbox.checked;

    let allChars = "";

    if (useUppercase) {
        allChars += upperCase;
    }

    if (useLowercase) {
        allChars += lowerCase;
    }

    if (useNumbers) {
        allChars += numbers;
    }

    if (useSpecial) {
        allChars += special;
    }
// let the user know they must choose at least 1 option

    if (allChars.length === 0) {
        passwordBox.value = "Please select at least one character type.";
        return;
    }

    let password = "";

    //add charachters to the password until it reaches the length desired by the user
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}