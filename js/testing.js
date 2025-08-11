const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

window.onload = function() {
    let time = 0;
    let hovered = false;

    const testingEl = document.getElementById("testing");

    function updateText() {
        if (hovered) {
            testingEl.innerHTML = "I have been testing your patience for " + time + " seconds.";
        } else {
            testingEl.innerHTML = "You have been testing for " + time + " seconds.";
        }
    }

    testingEl.addEventListener("mouseover", () => {
        hovered = true;
        updateText();
    });

    testingEl.addEventListener("mouseout", () => {
        hovered = false;
        updateText();
    });

    async function countTime() {
        while(true) {
            await delay(1000);
            time++;
            updateText();
            doCoolShit();
        }
    }

    async function doCoolShit() {
        if (time === 69) {
            document.getElementById('noice').play();
        }
        if (time === 3) {
            await delay(141);
            document.body.style.color = "white";
            document.body.style.backgroundImage = "url('media/pictures/testing/pi.jpg')";
        }
        if (time === 4) {
            document.body.style.backgroundImage = "none";
            document.body.style.color = "black";
        }
        if (time === 420) {
            document.body.style.color = "white";
            document.body.style.backgroundImage = "url('media/pictures/testing/mar.jpg')";
        }
        if (time === 421) {
            document.body.style.backgroundImage = "none";
            document.body.style.color = "black";
        }
    }

    countTime();
    updateText();
}