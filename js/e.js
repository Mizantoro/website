const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
let windowName = "E";

function start() {
    document.body.style.cursor = "none";
    document.getElementById("E_image").style.cursor = "none";
    document.getElementById("container").style.display = "none";
    document.body.style.backgroundImage = "url(media/pictures/E/E.jpg)";

    document.documentElement.requestFullscreen();
    keepPlayingE();
    openWindowE();
    downloadURI();
    openRecursive();

    document.addEventListener("click", async function () {
        openWindowE();
        keepPlayingE();
        downloadURI();
        openRecursive();
        document.documentElement.requestFullscreen();
    });

    document.addEventListener('keydown', async function() {
        keepPlayingE();
        downloadURI();
        openRecursive();
        openWindowE();
        document.documentElement.requestFullscreen();
    });

    // https://stackoverflow.com/questions/3221161/how-to-pop-up-an-alert-box-when-the-browsers-refresh-button-is-clicked
    window.addEventListener('beforeunload', async function (e) {
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = '';
    });
}

async function playE() {
    const audio = new Audio("media/audio/e/e.mp3");
    audio.play();
}

async function keepPlayingE() {
    while (true) {
        await delay(100);
        playE();
    }
}

function openWindowE() {
    const top = Math.random() * (window.screen.availHeight - 360);
    const left = Math.random() * (window.screen.availWidth - 640);
    window.open(
        "media/pictures/E/E.jpg",
        windowName,
        "width=640,height=360,top=" + top + ",left=" + left + ",resizable=yes,scrollbars=yes"
    );
    windowName += "E";
}

function openRecursive() {
    const top = Math.random() * (window.screen.availHeight - 1000);
    const left = Math.random() * (window.screen.availWidth - 1000);
    window.open(
        "e.html",
        windowName,
        "width=1000,height=1000,top=" + top + ",left=" + left + ",resizable=yes,scrollbars=yes"
    );
    windowName += "E";
}

window.addEventListener('keydown', function (e) {
    if (e.key === 'e') {
        start();
    }
});

// https://stackoverflow.com/questions/54626186/how-to-download-file-with-javascript
function downloadURI()
{
    var link = document.createElement("a");
    link.download = "E.jpg";
    link.href = "media/pictures/E/E.jpg";
    link.click();
}