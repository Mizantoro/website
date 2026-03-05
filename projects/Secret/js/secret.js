const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
var StoryProgress = 0;

async function playAudio() {
    document.getElementById('background_music').play();
}

async function startStory() {
    let Story = [
        "Long ago, in a faraway land...",
        "in a town far away...",
        "There lived a fearless young warrior <br> going by the name of Lancelot.",
        "He seeked the truth behind<br> the existence of the universe.",
        "He would spend countless days and sleepless nights<br> across many summers,<br> forever searching for the answer.",
        "Many had seen him as a dreamer,<br>one who wastes precious time<br>chasing answers that may never be found.",
        "He had lost many friends,<br> and even his own kin had turned away,<br> their faith in him long extinguished.",
        "One day, a blind storyteller of legends<br> wandered into his town.",
        "He told countless tales,<br> yet many in the town<br> dismissed him as a madman.",
        "Lancelot hung on every<br> word of his stories<br> with unwavering attention.",
        "One tale seized<br> the warrior’s deepest attention.",
        "The tale spoke of a monk living in<br> lofty mountains far away from the town.",
        "The monk was known to<br> have devoted his entire life<br> to the relentless pursuit of truth.",
        "The moment Lancelot heard the tale,<br> his heart was set — he vowed<br> to seek out the monk.",
        "He trained through endless days,<br> tireless weeks, relentless months,<br> and unyielding years.",
        "Mastering his craft.",
        "Many he once knew had<br> faded away long ago,<br> like whispers lost to the wind.",
        "He journeyed through countless moons,<br> crossing scorching deserts and verdant,<br> mist-laden jungles,",
        "until at last he stood<br> before the towering<br> mountain’s silent embrace.",
        "He began his ascent,<br> a climb that stretched over many days<br> and through the realm of wild beasts.",
        "At last,<br>he conquered the mountain’s peak.",
        "There, upon the mountain’s crest,<br> he found the monk and asked him about<br> the truth woven into the very fabric of the world.",
        "The monk sat quietly on the ground,<br> inviting Lancelot to take<br> his place beside him.",
        "The monk spoke softly,<br> saying he could reveal only<br> the secret to understanding the cosmos,",
        "if Lancelot vowed to keep<br>the secret veiled from all eyes.",
        "The warrior kept his promise.",
    ];

    if (StoryProgress == 0) {
        document.getElementById('starth1').style.opacity = '0';
        document.getElementById('starth2').style.opacity = '0';
        document.getElementById('button').innerHTML = "Continue";
    }

    document.getElementById('story').style.opacity = '0';
    await delay(800);
    document.getElementById('story').style.opacity = '1';
    document.getElementById('story').innerHTML = Story[StoryProgress];

    if(StoryProgress === 25) {
        document.getElementById('button').style.display = 'none';
        document.getElementById('starth1').innerHTML = "The end";
        await delay(1200);
        document.getElementById('starth1').style.opacity = '1';
        document.getElementById('starth2').style.opacity = '1';
        document.getElementById('story').style.opacity = '0';
        await delay(800);
        document.getElementById('story').innerHTML = "Music:  \"Renaissance Castle\"<br><a href=\"https://unsplash.com/photos/a-piece-of-paper-with-a-brown-background-Ng5onpi5iRQ\" target='_blank'>Background image</a><br><a href=\"https://github.com/Mizantoro/website\" target=\"_blank\">Source code</a>";
        document.getElementById('story').style.opacity = '1';
    }

    StoryProgress++;
}
