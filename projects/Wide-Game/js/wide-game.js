const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

let player = document.getElementById("player");
let game = document.getElementById("game");
let healthBarFill = document.getElementById("health_fill");
let youDied = document.getElementById("you_died");
let audio = document.getElementById("audio");
let displayScore = document.getElementById("display_score");
let playerPositionLeft = 100;
let createNewElementTimeOut = 1000;
let moveTimeOut = 50;
let health = 5;
let score = 0;
let playerAlive = true;
let animationSpeed = 800;

document.addEventListener('keydown', function(event) {
    audio.play();
    if (!playerAlive) {
        return;
    }
    if (event.key === 'a' || event.key === "ArrowLeft") {
        if (playerPositionLeft <= 100) {
            return;
        }
        playerPositionLeft -= 200;
    }
    if (event.key === 'd' || event.key === "ArrowRight") {
        if (playerPositionLeft >= 600) {
            return;
        }
        playerPositionLeft += 200;
    }
    player.style.left = playerPositionLeft + "px";
});

window.onload = async function() {
    moveObstacles();
    createObstacles();
    increaseSpeed();
}

async function createObstacles() {
    let position = Math.floor(Math.random() * 4);
    while (playerAlive) {
        await delay(createNewElementTimeOut);
        let div = document.createElement('div');
        if (Math.floor(Math.random() * 20) === 0) {
            div.classList.add('vodka');
        }
        else {
            div.classList.add('obstacle');
        }

        if (position === 0) {
            div.style.left = '100' + 'px';
        }
        if (position === 1) {
            div.style.left = '300' + 'px';
        }
        if (position === 2) {
            div.style.left = '500' + 'px';
        }
        if (position === 3) {
            div.style.left = '700' + 'px';
        }
        game.appendChild(div);
        position = Math.floor(Math.random() * 4);
    }
}

async function moveObstacles() {
    while (playerAlive) {
        await delay(moveTimeOut);
        const obstacles = game.querySelectorAll('.obstacle, .vodka');
        obstacles.forEach(el => {
            const currentBottom = parseInt(window.getComputedStyle(el).bottom);
            const currentLeft = parseInt(window.getComputedStyle(el).left);
            el.style.bottom = (currentBottom - 10) + 'px';

            if (currentBottom <= 140 && currentBottom >= 0 && currentLeft === playerPositionLeft) {
                if (el.classList.contains('obstacle')) {
                    updateHealth(true);
                }
                else {
                    updateHealth(false);
                }
                el.remove();
                console.log(currentLeft);
            }
            if (currentBottom <= -100) {
                inreaseScore();
                el.remove();
            }
        });
    }
}

async function updateHealth(demageTaken) {
    if (!demageTaken) {
        score += 9;
        inreaseScore();
    }
    if (!demageTaken && health < 5) {
        health++;
    }
    else if (demageTaken) {
        health--;
    }
    if (health === 0) {
        playerAlive = false;
        player.style.animation = "none";
        player.style.backgroundImage = "url(" + "media/pictures/wide-game/putin/explosion.png" + ")";
        youDied.style.opacity = 1;
    }
    let healthBarWidth = (health / 5) * 100;
    healthBarFill.style.width = `${healthBarWidth}%`;
}

async function increaseSpeed() {
    while (playerAlive) {
        await delay(7500);
        createNewElementTimeOut *= 0.9;
        moveTimeOut *= 0.9;
        animationSpeed *= 0.9;
        player.style.animation = `putin ${animationSpeed}ms infinite`;
    }
}

async function inreaseScore() {
    score++;
    displayScore.innerHTML = "Score: " + score;
}
