document.getElementById("start-game").onclick = function() {
    startGame();
};

let currentLevel = 1;

function startGame() {
    document.getElementById("game-area").style.display = "block";
    document.getElementById("start-game").style.display = "none";
}

function checkGift(element, level) {
    const isCorrect = element.getAttribute("data-correct") === "true";
    if (isCorrect) {
        if (level === 3) {
            showMessage();
        } else {
            nextLevel();
        }
    } else {
        alert("Oops! Try picking a different gift!");
    }
}

function nextLevel() {
    currentLevel++;
    document.querySelector("h2").textContent = `Level ${currentLevel}: Choose the Right Gift`;

    const gifts = document.querySelectorAll(".gift");
    gifts.forEach((gift, index) => {
        gift.setAttribute("data-correct", "false");
    });

    if (currentLevel === 2) {
        gifts[0].setAttribute("data-correct", "true");
    } else if (currentLevel === 3) {
        gifts[2].setAttribute("data-correct", "true");
    }
}

function showMessage() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("message").style.display = "block";
}
