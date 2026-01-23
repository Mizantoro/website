// This is ugly as fuck.
let Input = ""
let Output = "";
const Story = [
    "Trump"
];

StoryShort = [
    "Trump",
    "is",
    "very",
    "strong"
]

StoryMedium = [
    "Trump",
    "has",
    "never",
    "been",
    "to",
    "Epstein",
    "Island.",
    "and",
    "he",
    "is",
    "strong",
]

const StoryLong = [
    "Trump",
    "has",
    "never",
    "been",
    "to",
    "Epstein",
    "Island.",
    "He",
    "is",
    "very",
    "strong",
    "and",
    "his",
    "hands",
    "are",
    "big.",
    "The",
    "end."
];

const submitButton = document.getElementById("submit_input");

submitButton.addEventListener("click", (e) => {
    submitButton.style.display = "none";
    document.getElementById("input").style.display = "none";
    Input = document.getElementById("input").value.trim();
    if (Input.length < 800) {
        for (let i = 0; i < StoryShort.length - 1; i++) {
            Story[i] = StoryShort[i];
        }
    }
    if (Input.length > 800 && Input.length < 2000) {
        for (let i = 0; i < StoryMedium.length - 1; i++) {
            Story[i] = StoryMedium[i];
        }
    }
    if (Input.length > 2000) {
        for (let i = 0; i < StoryLong.length - 1; i++) {
            Story[i] = StoryLong[i];
        }
    }
    redact();
})

function redact() {
    for (let i = 0; i < Story.length; i++) {
        for (let j = 0; j < Story[i].length; j++) {
            let k = 0;
            while (Input[k] !== Story[i][j] && k < Input.length - 1) {
                Output = Output + "█";
                k++;
            }
            Output = Output + Story[i][j];
            Input = Input.slice(k + 1);
            if (Input === "") {
                console.log(Output);
                displayRedaction();
                return;
            }
        }
    }
    console.log(Output);
    displayRedaction();
}

function displayRedaction() {
    document.getElementById("output").innerHTML = Output;
    document.getElementById("output").style.display = "block";
}