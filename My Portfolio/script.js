4// Mobile Navigation Functions
// Opens the mobile navigation menu
// Mobile Navigation Functions
const nav = document.querySelector('nav');  // Added nav selection

function hamburg() {
    const navbar = document.querySelector(".dropdown");
    const cancelBtn = document.querySelector(".cancel");
    const hamburgerBtn = document.querySelector(".hamburg");
    
    navbar.style.transform = "translateY(0px)";
    nav.classList.add("nav-active");
    
    // Show cancel button and hide hamburger
    cancelBtn.style.display = "block";
    cancelBtn.style.opacity = "1";
    cancelBtn.style.visibility = "visible";
    
    hamburgerBtn.style.opacity = "0";
    hamburgerBtn.style.visibility = "hidden";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    const cancelBtn = document.querySelector(".cancel");
    const hamburgerBtn = document.querySelector(".hamburg");
    
    navbar.style.transform = "translateY(-500px)";
    nav.classList.remove("nav-active");
    
    // Hide cancel button and show hamburger
    cancelBtn.style.display = "none";
    cancelBtn.style.opacity = "0";
    cancelBtn.style.visibility = "hidden";
    
    hamburgerBtn.style.opacity = "1";
    hamburgerBtn.style.visibility = "visible";
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