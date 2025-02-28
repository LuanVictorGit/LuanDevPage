document.addEventListener("DOMContentLoaded", () => {
    updateTitles();

    let linguages = document.querySelectorAll(".listLinguages li");
    let seconds = 3;
    let top = false;
    for (let linguage of linguages) {
        if (top) {
            linguage.style.animation = `roulleteTop ${seconds}s ease infinite`;
            top = false;
        } else {
            linguage.style.animation = `roullete ${seconds}s ease-in-out infinite`;
            top = true;
        }
    }
});

let typingSpeed = 60;
let eraseSpeed = 30;
let pauseBeforeErase = 250;
let pauseAfterTyping = 3000;

function updateTitles() {
    let titles = document.querySelectorAll("h2");
    titles.forEach((title, index) => {
        let textTitle = title.textContent.trim();
        title.textContent = "";
        typeAndErase(title, textTitle, index * 800);
    });
}

function typeAndErase(title, textTitle, initialDelay) {
    setTimeout(() => {
        typeTitle(title, textTitle, 0);
    }, initialDelay);
}

function typeTitle(title, textTitle, currentLength) {
    if (currentLength < textTitle.length) {
        title.textContent += textTitle[currentLength];
        setTimeout(() => {
            typeTitle(title, textTitle, currentLength + 1);
        }, typingSpeed);
    } else {
        setTimeout(() => {
            eraseTitle(title, textTitle);
        }, pauseAfterTyping);
    }
}

function eraseTitle(title, textTitle) {
    if (title.textContent.length > 0) {
        title.textContent = title.textContent.slice(0, -1);
        setTimeout(() => {
            eraseTitle(title, textTitle);
        }, eraseSpeed);
    } else {
        setTimeout(() => {
            typeTitle(title, textTitle, 0);
        }, pauseBeforeErase);
    }
}