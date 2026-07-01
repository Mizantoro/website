// https://www.geeksforgeeks.org/javascript/how-to-detect-idle-time-in-javascript/
let timer, currSeconds = 0;
const DisplayTimer = document.getElementById("away_timer");
const AwayEyeContainer = document.getElementById("away_eye_container");
let AnimateText = false;
const AwayDialogues = {
    start: {
        text:
            "You have been away for too long. Now you shall answer my questions. If you believe you are not worthy you can leave. Are you ready?",
        options: [
            { text: "Yes", next: "yes" },
            { text: "I'm a coward (leave)", next: "leave" }
        ]
    },

    leave: {
        text:
            "Pathetic...",
        options: [
            { text: "Yes", next: "yes" },
            { text: "I'm a coward (leave)", next: "leave" }
        ]
    },

    yes: {
        text: `
            What is the result of 3 + 3 * 3?
        `,
        options: [
            { text: "18", next: "wrong" },
            { text: "12", next: "binary" },
        ]
    },

    binary: {
        text: `
            What is 1101 in binary in decimal form?
        `,
        options: [
            { text: "3", next: "wrong" },
            { text: "12", next: "wrong" },
            { text: "13", next: "ww2" },
            { text: "11", next: "wrong" },
        ]
    },

    ww2: {
        text: `
            When did World War II start?
        `,
        options: [
            { text: "1938", next: "wrong" },
            { text: "1914", next: "wrong" },
            { text: "1945", next: "wrong" },
            { text: "1939", next: "water" },
        ]
    },

    water: {
        text: `
            What is the atomic mass of water?
        `,
        options: [
            { text: "16 units", next: "wrong" },
            { text: "17 units", next: "wrong" },
            { text: "18 units", next: "units" },
            { text: "12 units", next: "wrong" },
        ]
    },

    units: {
        text: `
            What is the SI unit for mass?
        `,
        options: [
            { text: "gram", next: "wrong" },
            { text: "kilogram", next: "germany" },
            { text: "decagram", next: "wrong" },
            { text: "decigram", next: "wrong" },
        ]
    },

    germany: {
        text: `
            With how many countries does Germany shares a land border?
        `,
        options: [
            { text: "9", next: "population" },
            { text: "7", next: "wrong" },
            { text: "8", next: "wrong" },
            { text: "10", next: "wrong" },
        ]
    },

    population: {
        text: `
            What country has the highest population?
        `,
        options: [
            { text: "China", next: "wrong" },
            { text: "Nigeria", next: "wrong" },
            { text: "India", next: "covid" },
            { text: "USA", next: "wrong" },
        ]
    },

    covid: {
        text: `
            When did the Covid-<b>19</b> pandemic start?
        `,
        options: [
            { text: "2018", next: "wrong" },
            { text: "2019", next: "mountain" },
            { text: "2020", next: "wrong" },
            { text: "2021", next: "wrong" },
        ]
    },

    mountain: {
        text: `
            What is the second highest mountain?
        `,
        options: [
            { text: "Mount Everest", next: "wrong" },
            { text: "Mount Blanc", next: "wrong" },
            { text: "K2", next: "unix" },
            { text: "Makalu ", next: "wrong" },
        ]
    },

    unix: {
        text: `
            What is the root year of Unix time?
        `,
        options: [
            { text: "1970", next: "month" },
            { text: "2000", next: "wrong" },
            { text: "1950", next: "wrong" },
            { text: "2010", next: "wrong" },
        ]
    },

    month: {
        text: `
            How many months have 28 days?
        `,
        options: [
            { text: "1", next: "wrong" },
            { text: "2", next: "wrong" },
            { text: "6", next: "wrong" },
            { text: "12", next: "pi" },
        ]
    },

    pi: {
        text: `
            What is the closest approximation of &#960;?
        `,
        options: [
            { text: "3.131592", next: "wrong" },
            { text: "3.141593", next: "alphabet" },
            { text: "3.141492", next: "wrong" },
            { text: "3.141592", next: "wrong" },
        ]
    },

    alphabet: {
        text: `
            How many letters are in "alphabet"?
        `,
        options: [
            { text: "26", next: "wrong" },
            { text: "23", next: "wrong" },
            { text: "8", next: "chromosomes" },
            { text: "7", next: "wrong" },
        ]
    },

    chromosomes: {
        text: `
            How many chromosomes does a healthy human have?
        `,
        options: [
            { text: "46", next: "fundamental" },
            { text: "23", next: "wrong" },
            { text: "48", next: "wrong" },
            { text: "24", next: "wrong" },
        ]
    },

    fundamental: {
        text: `
            Which fundamental interaction is the weakest?
        `,
        options: [
            { text: "Weak nuclear force", next: "wrong" },
            { text: "Electromagnetism", next: "wrong" },
            { text: "Strong nuclear force", next: "wrong" },
            { text: "Gravity", next: "guitar" },
        ]
    },

    guitar: {
        text: `
            What is the standard tuning for a six-string guitar (from the lowest string to the highest string)?
        `,
        options: [
            { text: "D-A-D-G-B-E", next: "wrong" },
            { text: "E-A-D-G-B-E", next: "end" },
            { text: "E-A-D-G-B-A", next: "wrong" },
            { text: "E-A-D-F-B-E", next: "wrong" },
        ]
    },

    end: {
        text: `
            Very well. You have proven yourself not foolish. You may continue.
        `,
        options: [
        ]
    },

    wrong: {
        text: `
            Disgusting... Statistically, this was predictable. You are not worthy of this website.
        `,
        options: [
        ]
    },
};
let DialogueActive = false;

async function resetTimer() {
    if (currSeconds < 600) {
        clearInterval(timer);
        currSeconds = 0;
        timer =
            setInterval(startIdleTimer, 1000);

        showEverything();
        AnimateText = false;
        DisplayTimer.style.animation = "none";
    }

    if (currSeconds >= 600 && !DialogueActive) {
        DialogueActive = true;
        DisplayTimer.style.opacity = "0";
        AwayEyeContainer.style.left = "calc(50% - 85px)";
        AwayEyeContainer.style.bottom = "calc(40%)";
        await delay(4000);
        document.getElementById("away_dialogue_text").style.opacity = "1";
        document.getElementById("away_eye_button_container").style.opacity = "1";
        window.removeEventListener("scroll", scroll);
        renderAwayDialogues("start");
    }
}

// Define the events that
// would reset the timer
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;

async function startIdleTimer() {
    currSeconds++;
    if (currSeconds >= 600) {
        DisplayTimer.innerHTML = `You have been away for TOO LONG`;
    }
    else {
        DisplayTimer.innerHTML = `You have been away for ${currSeconds} seconds.`;
    }

    switch(currSeconds) {
        case 150:
            hideEverything();
            break;
        case 300:
            AnimateText = true;
            animateText();
            break;
        case 600:
            DisplayTimer.style.animation = "xy-shaking 0.4s infinite";
            break;
        default:
            break;
    }
}

async function hideEverything() {
    const hider = document.getElementById("away_hider");
    hider.style.display = "flex";
    await delay(200);
    hider.style.opacity = "1";
}

async function showEverything() {
    const hider = document.getElementById("away_hider");

    hider.style.opacity = "0";
    await delay(200);
    hider.style.display = "none";
}

async function animateText() {
    while (AnimateText) {
        DisplayTimer.style.textDecoration = "none";
        DisplayTimer.style.fontWeight = "normal";
        DisplayTimer.style.fontStyle = "normal";
        DisplayTimer.style.textTransform = "none";

        await delay(200);

        DisplayTimer.style.textDecoration = "underline";
        await delay(200);

        DisplayTimer.style.textDecoration = "none";
        DisplayTimer.style.textDecoration = "overline";
        await delay(200);

        DisplayTimer.style.textDecoration = "none";
        DisplayTimer.style.textDecoration = "line-through";
        await delay(200);

        DisplayTimer.style.textDecoration = "none";
        DisplayTimer.style.fontWeight = "bold";
        await delay(200);

        DisplayTimer.style.fontWeight = "normal";
        DisplayTimer.style.textTransform = "uppercase";
        await delay(200);

        DisplayTimer.style.textTransform = "capitalize";
        await delay(200);

        DisplayTimer.style.textTransform = "none";
        DisplayTimer.style.fontStyle = "italic";
        await delay(200);

        DisplayTimer.style.fontStyle = "normal";
    }
}

// Yes this is a copy-paste from the main js file. Cry me a river.
async function renderAwayDialogues(dialogueName) {
    const currentDialogue = AwayDialogues[dialogueName];
    const dialogueText = document.getElementById("away_dialogue_text");
    const buttonContainer = document.getElementById("away_eye_button_container");

    buttonContainer.innerHTML = "";
    dialogueText.innerHTML = currentDialogue.text;
    for (let option of currentDialogue.options) {
        const button = document.createElement("button");
        if (option.next != null) {
            button.innerText = option.text;
            button.onclick = async () => {
                renderAwayDialogues(option.next);
            }
        }
        buttonContainer.appendChild(button);
    }
    if (dialogueName === "end") {
        await delay(3000);
        showEverything();
    }
    if (dialogueName === "wrong") {
        await delay(3000);
        window.close();
        eyeRage();
        // superLogout();
        showEverything();
    }
    if (dialogueName === "leave") {
        await delay(3000);
        showEverything();
    }
}

// I HAVE NO IDEA IF IT WORKS!!! JUST COPIED FORM:
// https://github.com/jaczup/ptoszek.pl/blob/main/index.js#L1034
// let numSuperLogoutIframes = 0;
// const HIDDEN_STYLE = "display:none;width:0;height:0;border:0;";
// const LOGOUT_SITES = {
//     Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}],
//     Amazon: ['GET', 'https://www.amazon.com/gp/flex/sign-out.html?action=sign-out'],
//     DeviantART: ['POST', 'https://www.deviantart.com/users/logout'],
//     Dropbox: ['GET', 'https://www.dropbox.com/logout'],
//     eBay: ['GET', 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn'],
//     GitHub: ['GET', 'https://github.com/logout'],
//     GMail: ['GET', 'https://mail.google.com/mail/?logout'],
//     Google: ['GET', 'https://www.google.com/accounts/Logout'], // works!
//     Hulu: ['GET', 'https://secure.hulu.com/logout'],
//     NetFlix: ['GET', 'https://www.netflix.com/Logout'],
//     Skype: ['GET', 'https://secure.skype.com/account/logout'],
//     SoundCloud: ['GET', 'https://soundcloud.com/logout'],
//     'Steam Community': ['GET', 'https://steamcommunity.com/?action=doLogout'],
//     'Steam Store': ['GET', 'https://store.steampowered.com/logout/'],
//     Wikipedia: ['GET', 'https://en.wikipedia.org/w/index.php?title=Special:UserLogout'],
//     'Windows Live': ['GET', 'https://login.live.com/logout.srf'],
//     Wordpress: ['GET', 'https://wordpress.com/wp-login.php?action=logout'],
//     Yahoo: ['GET', 'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/'],
//     YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
//     JShop: ['GET', 'https://jshop.partners/panel/logout'],
//     Vimeo: ['GET', 'https://vimeo.com/log_out'], // added by @intexpression
//     Tumblr: ['GET', 'https://www.tumblr.com/logout'], // added by @intexpression
//     Allegro: ['GET', 'https://allegro.pl/wyloguj?origin_url=/'], // added by @intexpression
//     OnetMail: ['GET', 'https://authorisation.grupaonet.pl/logout.html?state=logout&client_id=poczta.onet.pl.front.onetapi.pl'], // added by @intexpression
//     InteriaMail: ['GET', 'https://poczta.interia.pl/logowanie/sso/logout'], // added by @intexpression
//     OLX: ['GET', 'https://www.olx.pl/account/logout'], // added by @intexpression
//     Roblox:  ['POST', 'https://auth.roblox.com/v2/logout'], // added by @cryblanka
//     ChatGPT: ['GET', 'https://chatgpt.com/auth/logout'], // added by @cryblanka
//     Guilded:  ['POST', 'https://www.guilded.gg/api/logout'], // added by @cryblanka
//     LinkedIn: ['GET', 'https://www.linkedin.com/m/logout/'], // added by @MARECKIyt
//     Pinterest: ['GET', 'https://www.pinterest.com/logout/'], // added by @MARECKIyt
//     Reddit: ['GET', 'https://www.reddit.com/logout'], // added by @MARECKIyt
//     Spotify: ['GET', 'https://www.spotify.com/logout/'], // added by @MARECKIyt
//     Microsoft: ['GET', 'https://login.microsoftonline.com/common/oauth2/logout'], // added by @MARECKIyt
//     Instagram: ['GET', 'https://www.instagram.com/accounts/logout/'], // added by @MARECKIyt
//     Trello: ['GET', 'https://trello.com/logout'], // added by @MARECKIyt
//     Baidu: ['GET', 'https://passport.baidu.com/?logout'], // added by @MARECKIyt
//     VK: ['GET', 'https://vk.com/exit'], // added by @MARECKIyt
//     StackOverflow: ['GET', 'https://stackoverflow.com/users/logout'], // added by @MARECKIyt
//     Asana: ['POST', 'https://app.asana.com/app/asana/-/logout'], // added by @Hyd3r1
// }
//
// function superLogout() {
//     function cleanup (el, delayCleanup) {
//         if (delayCleanup) {
//             delayCleanup = false
//             return
//         }
//         el.parentNode.removeChild(el)
//     }
//
//     function get(url) {
//         const img = new Image()
//         img.src = url
//     }
//
//     function post (url, params) {
//         const iframe = document.createElement('iframe')
//         iframe.style = HIDDEN_STYLE
//         iframe.name = 'iframe' + numSuperLogoutIframes
//         document.body.appendChild(iframe)
//
//         numSuperLogoutIframes += 1
//
//         const form = document.createElement('form')
//
//         let numLoads = 0
//         iframe.onload = iframe.onerror = () => {
//             if (numLoads >= 1) cleanup(iframe)
//             numLoads += 1
//         }
//
//         form.action = url
//         form.method = 'POST'
//         form.target = iframe.name
//
//         for (const param in params) {
//             if (Object.prototype.hasOwnProperty.call(params, param)) {
//                 const input = document.createElement('input')
//                 input.type = 'hidden'
//                 input.name = param
//                 input.value = params[param]
//                 form.appendChild(input)
//             }
//         }
//
//         document.body.appendChild(form)
//         form.submit()
//     }
//
//     for (const name in LOGOUT_SITES) {
//         const method = LOGOUT_SITES[name][0]
//         const url = LOGOUT_SITES[name][1]
//         const params = LOGOUT_SITES[name][2] || {}
//
//         if (method === 'GET') {
//             get(url)
//         } else {
//             post(url, params)
//         }
//     }
// }
