// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// Rose Rain Effect
function createRose() {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerHTML = "🌹";

    // Random horizontal position
    rose.style.left = Math.random() * 100 + "vw";

    // Start from top
    rose.style.top = "-50px";

    // Random animation duration between 2-4 seconds
    const duration = Math.random() * 2 + 2;
    rose.style.animationDuration = duration + "s";

    // No delay for immediate effect
    rose.style.animationDelay = "0s";

    // Random size variation
    const size = Math.random() * 20 + 20;
    rose.style.fontSize = size + "px";

    document.body.appendChild(rose);

    // Remove rose after animation completes
    setTimeout(() => {
        rose.remove();
    }, duration * 1000);
}

function startRoseRain() {
    // Create initial burst of roses
    for (let i = 0; i < 12; i++) {
        setTimeout(() => createRose(), i * 100);
    }

    // Continue creating roses for 4 seconds
    const interval = setInterval(() => {
        createRose();
    }, 300);

    setTimeout(() => {
        clearInterval(interval);
    }, 4000);
}

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    // Trigger rose rain effect
    startRoseRain();
});
