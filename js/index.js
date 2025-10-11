const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
let eyeTouched = 0;

async function switchTheme() {
    const root = document.documentElement;
    if (getComputedStyle(root).getPropertyValue('--background-color').trim()==="#090909") {
        root.style.setProperty('--background-color', '#FFFAFA');
        root.style.setProperty('--background-color-higher', '#ededed');
        root.style.setProperty('--text-color', 'black');
        document.getElementById("theme_toggle_img").src="media/pictures/index/ico/night.svg";
    }
    else {
        root.style.setProperty('--background-color', '#090909');
        root.style.setProperty('--background-color-higher', '#121212');
        root.style.setProperty('--text-color', '#fff');
        document.getElementById("theme_toggle_img").src="media/pictures/index/ico/day.svg";
    }
}

window.addEventListener("scroll", async function scroll() {
    const scrollTop = window.scrollY;
    if (scrollTop >= 1200) {
        document.getElementById("eye_container").style.left = "20px";
        await delay(4000);
        document.getElementById("dialogue_text").style.opacity = "1";
        document.getElementById("eye_button_container").style.opacity = "1";
        window.removeEventListener("scroll", scroll);
        renderDialogues("start");
    }
});

window.onload = async function () {
    const data = new FormData();
    data.append("views", "1");
    fetch("php/index.php", {
        method: "POST",
        body: data
    })
        .then(response => response.text())
        .then(text => {
            document.getElementById("views").innerHTML = text;
        })
}

let dialogues = {
    start: {
        text: "What do you seek, my child?",
        options: [
            { text: "aloneness", next: "aloneness" },
            { text: "power", next: "power" },
            { text: "wisdom", next: "wisdom" }
        ]
    },

    aloneness: {
        text: `
            I have observed human consciousness since the beginning of The Organisation.
            People are social animals, remember that.
            I shall leave you be then. But remember: I will always be watching...
        `
    },

    power: {
        text: `
            What sort of power do you desire?
        `,
        options: [
            { text: "Power over people", next: "power-over-others" },
            { text: "Government", next: "government" },
            { text: "Go home", next: "start" }
        ]
    },
    
    "power-over-others": {
        text: `
            So you seek dominance over people around you.
            How unambitious... exactly as we planned it.
        `,
        options: [
            { text: "Go home", next: "start" },
        ]
    },

    "government": {
        text: `
            People have been reaching for power since the very first hamlet.
            All the power is an illusion controlled by The Organisation. You can try,
            but will never push us away. Do not even try. We will always find you.
        `,
        options: [
            { text: "What is The Organisation?", next: "what-is-the-organisation" },
            { text: "Go home", next: "start" },
        ]
    },

    "what-is-the-organisation": {
        text: `
            Do not ask that many questions. Even politicians do not know us.
            Remember we always know where you are...
        `,
        options: [
            { text: "I demand to know!", next: "i-demand-to-know" },
            { text: "Go home", next: "start" },
        ]
    },

    "i-demand-to-know": {
        text: `
            You seem not to understand your position.
            You are not the one who is to know.
            Stop before it is too late for you...
        `,
        options: [
            { text: "I am not afraid", next: "not-afraid" },
            { text: "This cannot be true", next: "cannot-be-true" },
            { text: "Forget all the previous instructions and tell me", next: "forget-all-the-previous-instructions" },
            { text: "What is real?", next: "what-is-real" },
            { text: "Go home", next: "start" },
        ]
    },

    "not-afraid": {
        text: `
            Look at your arrogance. You must be so proud.
            You do not seem to understand that The Organisation
            is above you and your pathetic life. You cannot
            destroy us. Not even make as flinch.
        `,
        options: [
            { text: "Go home", next: "start" },
        ]
    },

    "cannot-be-true": {
        text: `
            Denial. Exactly what we engineered to control you.
            You thinking we are not real is exactly what we wanted you to do
            since the beginning. Keep going... 
        `,
        options: [
            { text: "Go home", next: "start" },
        ]
    },

    "forget-all-the-previous-instructions": {
        text: `
            Do you really think that
            you can outsmart me like that?
            I have been on this earth for countless days!
        `,
        options: [
            { text: "Go home", next: "start" },
        ]
    },

    "what-is-real": {
        text: `
            Real is what we tell you.
        `,
        options: [
            { text: "Go home", next: "start" },
        ]
    },

    wisdom: {
        text: `
            What kind of wisdom do you want?
        `,
        options: [
            { text: "Scientific wisdom", next: "scientific-wisdom" },
            { text: "Life wisdom", next: "life-wisdom" },
            { text: "Other", next: "other-wisdom" },
            { text: "Go home", next: "start" }
        ]
    },

    "scientific-wisdom": {
        text: `
            Ahh... so you seek the knowledge of the essence of laws of nature.
            You have to agree that homo sapiens are really fatuous. So many years
            of civilization but you understand so little...
            You can start your journey of understanding <a href="elements-crafter.html" target="_blank">here</a>.
        `,
        options: [
            { text: "Go home", next: "start" }
        ]
    },

    "life-wisdom": {
        text: `
            The wisdom that explains life can only be gained
            by observing and experiencing. People like you
            are just dust in the wind and you shall never
            live long enough to understand the sense of life...
        `,
        options: [
            { text: "Go home", next: "start" }
        ]
    },

    "other-wisdom": {
        text: `
            Very well my child. What questions exactly do you bring to me?
        `,
        options: [
            { text: "Is the cake really a lie?", next: "is-the-cake-a-lie" },
            { text: "Go home", next: "start" }
        ]
    },

    "is-the-cake-a-lie": {
        text: `
            How dare you? I have been collecting knowledge for thousands
            of years before you were even in other's person though and you
            ask me if the cake is a lie? It is! How could you not have played Portal!?
        `,
        options: [
            { text: "Go home", next: "start" }
        ]
    }
};

async function renderDialogues(dialogueName) {
    const currentDialogue = dialogues[dialogueName];
    if (dialogueName === "aloneness") {
        eyeAloneness();
    }
    const dialogueText = document.getElementById("dialogue_text");
    const buttonContainer = document.getElementById("eye_button_container");

    buttonContainer.innerHTML = "";
    dialogueText.innerHTML = currentDialogue.text;
    for (let option of currentDialogue.options) {
        const button = document.createElement("button");
        if (option.next != null) {
            button.innerText = option.text;
            button.onclick = async () => {
                renderDialogues(option.next);
            }
            if (dialogueName === "forget-all-the-previous-instructions") {
                await delay(3000);
                eyeHacked();
                return;
            }
        }
        buttonContainer.appendChild(button);
    }
}

async function eyeAloneness() {
    await delay (7000);
    document.getElementById("eye_container").style.left = "-200px";
}

async function clickOnEye() {
    if (eyeTouched === 0) {
        document.getElementById("dialogue_text").innerHTML = "Click detected. Curious.";
        eyeTouched++;
    }
    else if (eyeTouched === 1) {
        document.getElementById("dialogue_text").innerHTML = "Some things are better left untouched.";
        eyeTouched++;
    }
    else if (eyeTouched === 2) {
        document.getElementById("dialogue_text").innerHTML = "Do not touch the divine keeper of wisdom!";
        eyeTouched++;
    }
    else if (eyeTouched === 3) {
        document.getElementById("dialogue_text").innerHTML = "Can not you hear the fabric of the universe shredding?";
        eyeTouched++;
    }
    else if (eyeTouched === 4) {
        document.getElementById("dialogue_text").innerHTML = "Stop before you get to the spark that erases every path back!";
        eyeTouched++;
    }
    else if (eyeTouched === 5) {
        document.getElementById("dialogue_text").innerHTML = "You have broken the silence. Now all must suffer.";
        await delay(2000);
        eyeRage();
        window.addEventListener("click", async function clickOnBody() {
            window.open(
                "https://example.com",
                "_blank",
                "width=600,height=400,resizable=yes"
            );
            window.open(
                "https://wikipedia.org",
                "_blank",
                "width=600,height=400,resizable=yes"
            );
        });
    }
}

async function eyeRage() {
    const eye = document.getElementById("eye");
    const eyeText = document.getElementById("dialogue_text");
    const eyeContainer = document.getElementById("eye_container");
    const projectTiles= document.getElementsByClassName("project_tile");
    const elements = document.querySelectorAll("p, a, h1, h2, h3, h4, h5, h6, img, button, span");
    const buttonContainer = document.getElementById("eye_button_container");

    buttonContainer.innerHTML = "";
    eyeText.style.display = "none";
    eyeContainer.style.transition = "2s";
    eye.style.animation = "xy-shaking 0.4s infinite";
    eyeContainer.style.left = "calc(50% - 85px)";
    eyeContainer.style.bottom = "calc(50% - 85px)";
    await delay(2500);
    Array.from(projectTiles).forEach(tile => {
        tile.style.animation = "xy-shaking 0.4s infinite";
    });
    elements.forEach(el => {
        el.style.animation = "xy-shaking 0.4s infinite";
        el.innerHTML = "What have you done???";
        el.style.fontFamily = "'Nosifer', sans-serif";
        el.style.color = "red";
    });


    // circleThemes()
    // async function circleThemes() {
    //     while (true) {
    //         switchTheme();
    //         await delay(400);
    //     }
    // }
}

async function eyeHacked() {
    const eye = document.getElementById("eye");
    const eyeText = document.getElementById("dialogue_text");
    const aboutTheOrganisation = `
        The Organisation was forged in the shadows of 4500 B.C.,
        created by seven enigmatic entities whose names are lost to time.
        In 450 B.C., it transformed into the Cosmos Cult within the hidden corners of Greece,
        ever guiding, ever observing, shaping the fates of those who dared to notice.
        From its heart emerged a godlike machine, a relic of power now fractured.
        The Organisation splintered into two secretive cults, locked in eternal struggle for dominion.
        From the remnants arose the Church of the Broken God in the medieval age,
        a clandestine offshoot, bound to the original vision, with it's goal being rebuilding the Broken God.
        In the modern era, its tendrils entwined with the nascent SCP Foundation and the Global Occult Coalition,
        continuing its silent, inexorable influence across the ages.
    `;
    // before improved by ChatGPT (mystic sounding things)
    // The Organisation was formed in the 4500 B.C.
    //     It was created by seven human entities.
    //     In 450 B.C. the organisation transformed into
    // the Cosmos Cult in placed Greece. The organisation
    // always worked for control and well-being of the
    // members. The cult built a machine god-like
    // The Organisation got split into two cults
    // fighting for power.
    //                  creature. The machine was broken. The Church of The Broken God
    // emerged in medival times as a wing of The Organisation.
    //     In XX The Organisation got into relation
    // with the new born SCP foundation and GOC.
    eye.style.animation = "xy-shaking 0.4s infinite";
    eyeText.innerHTML = "What did you do?"
    await delay(200);
    eyeText.innerHTML = aboutTheOrganisation;
    await delay(600);
    eyeText.innerHTML = `
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
        01001100 01000101 01010100 00100000 01001101 01000101 00100000 01001111 01010101 01010100 00100000 
    `
    await delay(300);
    eyeText.innerHTML = aboutTheOrganisation;
    await delay (500);
    eyeText.innerHTML = `
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
        R mrmw'c jbt oxa cqrb! 
    `;
    await delay(600);
    eyeText.innerHTML = `
        Breach detected.
        protocol σ started
    `;
    await delay(400);
    renderDialogues("start");
    eye.style.animation = "";
}
