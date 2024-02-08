// Dark Mode/Light Mode Switch
function toggleDarkMode() {
    const body = document.body;
    const switchButton = document.querySelector('.switch input');
    const favicon = document.getElementById('favicon');

    // Toggle 'dark-mode' class
    body.classList.toggle('dark-mode');

    // Switch button
    switchButton.value = body.classList.contains('dark-mode') ? 'LIGHTS ON' : 'LIGHTS OFF';

    // Favicon
    body.classList.contains('dark-mode') ? favicon.href = './images/z-moon.png' : favicon.href = './images/z-white-balance.png';

    // Page Title
    document.title = body.classList.contains('dark-mode') ? 'Dark Calculator' : 'Light Calculator';

    // Store preference for next page visit
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Calculation Stuff
function calculate() {
    const display = document.getElementById("display");
    try {
        // Use eval() for simplicity
        let result = eval(display.value);

        // Check if result is a whole number
        if (result % 1 === 0) {
            display.value = result.toFixed(0);
        } else {
            display.value = result.toFixed(2);
        }
    } catch (error) {
        display.value = "ERROR";
    }
}

// Event listener to clear the display on page load
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    display.value = "";

    const body = document.body;
    const darkModePreference = localStorage.getItem('darkMode');

    
    // Add the 'no-transition' class to prevent the transition on page load
    body.classList.add('no-transition');
    
    // Remove the 'no-transition' class after delay
    setTimeout(() => {
        body.classList.remove('no-transition');
    }, 100);

    if (darkModePreference === 'true') {
        toggleDarkMode();
    }



    // Scrolling Arrows Code
    const scrollLeftButton = document.getElementById("scrollLeft");
    const scrollRightButton = document.getElementById("scrollRight");

    let scrollInterval;

    // Start scrolling when left arrow button is clicked
    scrollLeftButton.addEventListener("mousedown", function () {
    startScrolling('left');
    });

    // Stop scrolling when left arrow button is released
    scrollLeftButton.addEventListener("mouseup", stopScrolling);

    // Start scrolling when right arrow button is clicked
    scrollRightButton.addEventListener("mousedown", function () {
        startScrolling('right');
    });

    // Stop scrolling when right arrow button is released
    scrollRightButton.addEventListener("mouseup", stopScrolling);

    // Stop scrolling when the mouse leaves the button area
    scrollLeftButton.addEventListener("mouseleave", stopScrolling);
    scrollRightButton.addEventListener("mouseleave", stopScrolling);

    function startScrolling(direction) {
        scrollInterval = setInterval(function () {
            const display = document.getElementById("display");
            const step = 10;

            if (direction === 'left') {
                display.scrollLeft -= step;
            } else {
                display.scrollLeft += step;
            }
        }, 50);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }
            

});
