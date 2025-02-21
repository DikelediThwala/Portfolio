const titles = [
    "Software Developer",
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer"
];

let currentIndex = 0;
let isDeleting = false;
let currentText = '';
let typingSpeed = 150; // Speed of typing
let erasingSpeed = 100; // Speed of erasing
const delayBetweenTitles = 2000; // Pause before starting the next title

function type() {
    const titleElement = document.getElementById('animated-title');

    // Get the current full title
    const fullTitle = titles[currentIndex];

    // If deleting, remove characters
    if (isDeleting) {
        currentText = fullTitle.substring(0, currentText.length - 1);
    } else {
        // If typing, add characters
        currentText = fullTitle.substring(0, currentText.length + 1);
    }

    titleElement.textContent = currentText;

    // Adjust speed based on typing or deleting
    let speed = isDeleting ? erasingSpeed : typingSpeed;

    // If the title is completely typed out
    if (!isDeleting && currentText === fullTitle) {
        speed = delayBetweenTitles; // Pause before deleting
        isDeleting = true;
    }
    // If the title is completely deleted
    else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % titles.length; // Move to the next title
        speed = typingSpeed; // Start typing again
    }

    setTimeout(type, speed);
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
    type();
});
