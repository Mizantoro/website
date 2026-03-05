const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

window.onload = async function() {
    let time = 0;
    let sun = 0;
    let voyager = 0;
    let supernova = 0;
    let stars = 0;
    let light = 0;

    // Time
    async function countTime() {
        while(true) {
            if(time === 1) {
                document.getElementById("time").innerHTML = time + " second.";
            }
            else {
                document.getElementById("time").innerHTML = time + " seconds.";
            }
            time++;
            await delay(1000);
        }
    }

    // Sun energy
    async function countSun() {
        while(true) {
            document.getElementById("sun").innerHTML = sun.toLocaleString() + " TJ converted.";
            sun+=35950207149473;
            await delay(100);
        }
    }

    // Voyager travel distance
    async function countVoyager() {
        while(true) {
            document.getElementById("voyager").innerHTML = voyager.toFixed(3) + " km traveled.";
            voyager+=2.125;
            await delay(125);
        }
    }

    // Supernova
    async function countSupernova() {
        while(true) {
            document.getElementById("supernova").innerHTML = supernova.toLocaleString() + " bangs.";
            supernova+=173;
            await delay(91);
        }
    }

    // Stars
    async function countStars() {
        while(true) {
            document.getElementById("stars").innerHTML = stars.toLocaleString() + " lightbulbs.";
            stars+=103000;
            await delay(250);
        }
    }

    // Light
    async function countLight() {
        while(true) {
            document.getElementById("light").innerHTML = light.toLocaleString() + " m traveled.";
            light+=149896229;
            await delay(500);
        }
    }

    countTime();
    countSun();
    countVoyager();
    countSupernova();
    countStars();
    countLight();
}