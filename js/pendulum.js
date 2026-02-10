let rotationDegrees = 0;
let radiansLength = 100;
let gravitationalAcceleration = 9.81;

const degreeInput = document.getElementById("degreesInput");
const metersInput = document.getElementById("metersInput");
const accelerationInput = document.getElementById("accelerationInput");

degreeInput.addEventListener('input', () => {
    if (degreeInput.value > 15 || degreeInput.value < 0) {
        return;
    }
    rotationDegrees = degreeInput.value;
    console.log(rotationDegrees);
    animate();
});

metersInput.addEventListener('input', () => {
    if (metersInput.value < 0) {
        return;
    }
    radiansLength = metersInput.value;
    document.getElementById("pendulum_radius").style.height = radiansLength + "px";
    animate();
});

accelerationInput.addEventListener('input', () => {
    if (metersInput.value < 0) {
        return;
    }
    gravitationalAcceleration = accelerationInput.value;
    calculatePeriod();
    animate();
});

function calculatePeriod() {
    const period = (2 * Math.PI * Math.sqrt((radiansLength / 10) / gravitationalAcceleration));
    document.getElementById("period").innerHTML = "Period: " + Math.round(100 * period) / 100 + " s";
    return period * 1000;
}

function animate() {
    // https://stackoverflow.com/questions/59573722/how-can-i-set-a-css-keyframes-in-javascript
    document.getElementById("pendulum_radius").animate([
        { transform: 'rotate(' + rotationDegrees + 'deg' },
        { transform: 'rotate(' + ((-1) * rotationDegrees) + 'deg' },
    ], {
        duration: calculatePeriod() / 2, // one animation is a half of a period
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}