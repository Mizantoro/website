const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line


window.onload = async function() {
    let time = 0;
    let dead = 0;
    let suicide = 0;
    let starve = 0;
    let car = 0;
    let war = 0;
    let tree = 0;
    let plastics = 0;
    let extinct = 0;

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

    // Total deaths
    async function countDead() {
        while(true) {
            document.getElementById("dead").innerHTML = dead + " died.";
            dead++;
            await delay(500);
        }
    }

    // Suicide
    async function countSuicide() {
        while(true) {
            document.getElementById("suicide").innerHTML = suicide + " suicided.";
            suicide++;
            await delay(43800);
        }
    }

    // Starve
    async function countStarve() {
        while(true) {
            document.getElementById("starve").innerHTML = starve + " starved.";
            starve++;
            await delay(3500);
        }
    }

    // Car accidents
    async function countCar() {
        while(true) {
            document.getElementById("car").innerHTML = car + " crashed.";
            car++;
            await delay(26000);
        }
    }

    // Wars
    async function countWar() {
        while(true) {
            document.getElementById("war").innerHTML = war + " fell.";
            war++;
            await delay(133000);
        }
    }

    // Trees
    async function countTree() {
        while(true) {
            document.getElementById("tree").innerHTML = tree + " m^2 deforested.";
            tree += 453; // divided  by 7
            await delay(143); // 1000 / 7 = 142.8571
        }
    }

    // Plastics
    async function countPlastics() {
        while(true) {
            document.getElementById("plastics").innerHTML = plastics + " kg dumped.";
            plastics++;
            await delay(2867);
        }
    }

    // Extinct
    async function countExtinct() {
        while(true) {
            document.getElementById("extinct").innerHTML = extinct + " perished.";
            extinct++;
            await delay(573000);
        }
    }

    countTime();
    countDead();
    countSuicide();
    countStarve();
    countCar();
    countWar();
    countTree();
    countPlastics();
    countExtinct()
}