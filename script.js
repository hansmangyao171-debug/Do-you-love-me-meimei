
document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const questionScreen = document.getElementById("question-screen");
    const successScreen = document.getElementById("success-screen");

    let yesSize = 1;
    let noClicks = 0;

   
// RUNAWAY NO BUTTON

let noAttempts = 0;


function dodgeNoButton() {

    noAttempts++;

    const padding = 25;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = padding + Math.random() * Math.max(0, maxX - padding);
    const randomY = padding + Math.random() * Math.max(0, maxY - padding);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Panic animation
    noBtn.classList.remove("running");
    void noBtn.offsetWidth;
    noBtn.classList.add("running");

    // Grow YES button
    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;

    const messages = [
        "NOPE! 😂",
        "Too slow! 💨",
        "Catch me! 💗",
        "Not today! 😭",
        "JUST SAY YES!",
        "Give up already! 💕",
        "You can't catch me!"
    ];

    noBtn.textContent =
        messages[Math.min(noAttempts - 1, messages.length - 1)];
}


// Runs away when the mouse approaches
noBtn.addEventListener("mouseenter", dodgeNoButton);

// Also works on touchscreens
noBtn.addEventListener("click", dodgeNoButton);

    // YES BUTTON
   
yesBtn.addEventListener("click", () => {
    questionScreen.classList.add("hidden");
    successScreen.classList.remove("hidden");

    // Start the celebration!
    startCelebration();
});

function startCelebration() {
    const colors = [
        "#ff4d6d",
        "#ffcc00",
        "#7bed9f",
        "#70a1ff",
        "#e056fd",
        "#ffffff"
    ];

    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.setProperty(
            "--drift",
            (Math.random() * 300 - 150) + "px"
        );

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6500);
    }
}

    // FLOATING HEARTS
    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.textContent = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        document.querySelector(".hearts-container").appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 8000);
    }

    setInterval(createHeart, 500);

});
