window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sounds"); 
    const Card = document.querySelectorAll(".Card");

    console.log(sounds);

    Card.forEach((Card, index) => {
        Card.addEventListener("click",function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });



});

