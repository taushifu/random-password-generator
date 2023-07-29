
let password = "";

let input_area = document.getElementById('input_area');


//checkboxs
let upperbox = document.getElementById('upper');
let lowerbox = document.getElementById('lower');
let numberbox = document.getElementById('number');
let symbolbox = document.getElementById('symbol');


//funtion to get latest value of length
function getLengthValue() {
    length = document.getElementById('length').value;
    return length;
}


//strings of every type
let upStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowStr = "abcdefghijklmnopqrstuvwxyz";
let numStr = "0123456789";
let symbolStr = "!@#$}%^&*)-_=+][{:>;<,.?/|(";


//function to generate random character using given string
function randomChar(str) {
    let min = 0;
    let max = str.length - 1;

    return str[Math.floor(Math.random() * (max - min + 1) + min)];
}


//copy to clipboard
function copyIt() {
    let text = input_area.value;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch(err => {
            alert('Error in copying text: ', err);
        });

}


//functions to check whether checkbox are checked or not
function checkAndAppend() {

    if (upperbox.checked) {
        password += randomChar(upStr);
    }

    if (lowerbox.checked) {
        password += randomChar(lowStr);
    }

    if (numberbox.checked) {
        password += randomChar(numStr);
    }

    if (symbolbox.checked) {
        password += randomChar(symbolStr);
    }

    let len = getLengthValue();
    if (password.length < len) {
        checkAndAppend();
    }

    if (password.length > len) {
        password = password.slice(0, len);
    }
}


function generateFunc() {
    checkAndAppend();
    input_area.value = password;
    password = "";
}

