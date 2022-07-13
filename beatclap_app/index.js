var bg = document.getElementById("particles-js");


// les évènements on click et on appelle la fonction de callback

// document.addEventListener("click", function(){
//     alert("bonjour");
// });

document.addEventListener("keydown", function(event){
    
    console.log(event);

    bg.style.backgroundColor = getRandomColor();
    
    var key = event.key;
    playMusic(key);


}
)


function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random()*letters.length)]
        
    }
    return color;
}


function playMusic(key) {
    switch (key) {
        case "d":
            var audio = new Audio("kick.mp3");
            audio.play();
            break;

        case "e":
            var audio = new Audio("kick1.wav");
            audio.play();
            break;
    
        case "a":
        var audio = new Audio("kick2.mp3");
        audio.play();
        break;

        default:
            var audio = new Audio("Clap1.wav");
            audio.play();
            break;
    }
    
}