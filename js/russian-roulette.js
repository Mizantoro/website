function shot() {
    let lost = document.getElementById("lost");
    let won = document.getElementById("won");
    let revolver = document.getElementById("revolver");

    revolver.style.animation = "none";
    lost.style.display = "none";
    won.style.display = "none";
    if(Math.floor(Math.random() * 6) === 0) {
        document.getElementById("shot").play();
        revolver.style.animation = "shot 0.3s"
         lost.style.display = "block";
    }
    else {
        document.getElementById("dry").play();
        won.style.display = "block";
    }
}
