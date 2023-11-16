window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const Cards = document.querySelectorAll(".Card");
    const repeatingCards = document.querySelectorAll(".repeatingCard");
    const repeatingSounds = document.querySelectorAll(".repeatingSound");

    console.log(sounds);

    Cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });

    repeatingCards.forEach((card, index) => {
        card.addEventListener("click", function () {
            console.log(repeatingSounds[index].paused); //dont need this anymore
            if (repeatingSounds[index].paused) {
                repeatingSounds[index].currentTime = 0;
                repeatingSounds[index].play();
            }
            else {
                repeatingSounds[index].pause();
            }
        });
    });
});