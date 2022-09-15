const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
};
window.addEventListener("resize", documentHeight);
documentHeight();

const scrollTo = (anchorTags) => {
    document.querySelectorAll(anchorTags).forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};
scrollTo(".js-href");

const clickMe = (trigger, element, ui, style) => {
    document.getElementById(trigger).addEventListener("click", () => {
        document.getElementById(element).classList.add(style);
        document.getElementById(ui).classList.add(style);
    })
};
clickMe("click--bike", "bike", "arrow--bike", "show");

const playAudio = (button, element, ui, style) => {
    document.getElementById(button).addEventListener("click", () => {
        setTimeout(() => {
            document.getElementById(ui).classList.add(style);
        }, 6000);
        const audio = document.getElementById(element);
        if (audio.paused)
            audio.play();
        else
            audio.pause();
    });

};
playAudio("click--audio", "audio", "arrow--audio", "show");

const inputConfetti = (box, confetti, style, active) => {
    const input = document.getElementById(box);
    input.addEventListener("keyup", () => {
        if (input.dataset.letter.toUpperCase() === input.value.toUpperCase()) {
            document.getElementById(confetti).classList.add(style);
            input.style.background = "#30c9e8";
        } else {
            input.style.background = "#f44f4f"
        }
    })
};
inputConfetti("c", "input-confetti-c", "show");
inputConfetti("o", "input-confetti-o", "show");
inputConfetti("l-1", "input-confetti-l-1", "show");
inputConfetti("l-2", "input-confetti-l-2", "show");
inputConfetti("i", "input-confetti-i", "show");

const countDownDate = new Date("May 21, 2023").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " giorni<br>" + hours + " ore<br>"
        + minutes + " minuti<br>" + seconds + " secondi";

    if (distance < 0) {
        clearInterval();
        document.getElementById("countdown").innerHTML = "READY TO GO!";
    }
}, 1000);

const toTop = document.querySelector(".to-top");
toTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

