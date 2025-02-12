4// Mobile Navigation Functions
// Opens the mobile navigation menu
function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

// Closes the mobile navigation menu
function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect Configuration
// Array of texts to display in the typewriter effect
const texts = [
    "BTEC Computing Graudate",
    "Aspiring Apprentice",
    "Technical Problem Solver"
]

// Speed of typing animation in milliseconds
let speed = 100;

// DOM element where the typewriter text will appear
const textElements = document.querySelector(".typewriter-text")

// Tracking variables for current position in text array and characters
let textIndex = 0;      // Current text being displayed
let charcterIndex = 0;  // Current character position in text

// Types out the text character by character
function typeWriter() {
    if(charcterIndex < texts[textIndex].length) {
        // Add next character
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    } else {
        // Text finished typing, start erasing after delay
        setTimeout(eraseText, 1000)
    }
}

// Erases the text character by character
function eraseText() {
    if(textElements.innerHTML.length > 0) {
        // Remove last character
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    } else {
        // Text completely erased, move to next text
        textIndex = (textIndex + 1) % texts.length;  // Loop back to start if at end
        charcterIndex = 0;
        setTimeout(typeWriter, 500)  // Start typing next text after delay
    }
}

// Start the typewriter effect when page loads
window.onload = typeWriter;