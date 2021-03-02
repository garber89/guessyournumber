let maximum = parseInt(prompt('Enter your Maximum Number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}

const targNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt('Enter your first guess'));
while (guess !== targNum) {
    attempts++;
    if (guess > targNum) {
        guess = parseInt(prompt('Too high! Enter a new guess:'));
    } else {
        guess = parseInt(prompt('Too low! Enter a new guess:'));
    }
}

jQuery(document).ready(function () {
    $('div').text('You Guessed the Number!');
    $('div').css('font-size', '8em');
    $('div').css('color', '#265B5F');
    $('div').css('text-align', 'center');
    $('div').css('font-family', 'Georgia');
    $('div').css('background-color', '#FBFBF8');
    $('body').css('background-color', '#265B5F');
})

