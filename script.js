// Select the input box
let display = document.querySelector("#inputbox");

// Select all buttons
let buttons = document.getElementsByTagName("button");
let string = '';
let btnArr = Array.from(buttons);

// Loop through each button and add event listener
btnArr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = '';
            display.value = string;
        } else if (e.target.innerHTML == "=") {
            // Evaluate the expression and update the display with the result
            string = eval(string);
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});