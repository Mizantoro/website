const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
let CraftingItems = [];
const Elements = [
    "Hydrogen","Helium","Lithium","Beryllium","Boron",
    "Carbon","Nitrogen","Oxygen","Fluorine","Neon",
    "Sodium","Magnesium","Aluminium","Silicon","Phosphorus",
    "Sulfur","Chlorine","Argon","Potassium","Calcium",
    "Scandium","Titanium","Vanadium","Chromium","Manganese",
    "Iron","Cobalt","Nickel","Copper","Zinc",
    "Gallium","Germanium","Arsenic","Selenium","Bromine",
    "Krypton","Rubidium","Strontium","Yttrium","Zirconium",
    "Niobium","Molybdenum","Technetium","Ruthenium","Rhodium",
    "Palladium","Silver","Cadmium","Indium","Tin",
    "Antimony","Tellurium","Iodine","Xenon","Cesium",
    "Barium","Lanthanum","Cerium","Praseodymium","Neodymium",
    "Promethium","Samarium","Europium","Gadolinium","Terbium",
    "Dysprosium","Holmium","Erbium","Thulium","Ytterbium",
    "Lutetium","Hafnium","Tantalum","Tungsten","Rhenium",
    "Osmium","Iridium","Platinum","Gold","Mercury",
    "Thallium","Lead","Bismuth","Polonium","Astatine",
    "Radon","Francium","Radium","Actinium","Thorium",
    "Protactinium","Uranium","Neptunium","Plutonium","Americium",
    "Curium","Berkelium","Californium","Einsteinium","Fermium",
    "Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium",
    "Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium",
    "Roentgenium","Copernicium","Nihonium","Flerovium", "Moscovium",
    "Livermorium", "Tennessine", "Oganesson"
];
const ElementsCrafted = new Array(118).fill(false);

$('#crafting_table').droppable({
    drop: function(ev, ui) {
        $(ui.draggable)
            .appendTo(this)
            .css({ position: 'absolute' })
            .draggable('disable');

        CraftingItems = [];
        document.querySelectorAll(`
            #crafting_table .up_quark,
            #crafting_table .down_quark,
            #crafting_table .proton,
            #crafting_table .neutron
        `).forEach(div => {
            console.log([...div.classList]);
            CraftingItems.push([...div.classList]);
        });
        Craftable();
    }
});

function toggleDiv(id) {
    let div = document.getElementById(id);
    let displayValue = window.getComputedStyle(div, null).display; // https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript
    if (displayValue === "none") {
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}

function addElements(newElement) {
    document.getElementById("crafting_button").disabled = false;

    document.getElementById("pop").currentTime = 0;
    document.getElementById("pop").play();

    const newDiv = document.createElement('div');
    newDiv.className = newElement;
    if (newElement === "up_quark") {
        newDiv.textContent = 'Uq';
    }
    if (newElement === "down_quark") {
        newDiv.textContent = 'Dq';
    }
    if (newElement === "proton") {
        newDiv.textContent = 'p+';
    }
    if (newElement === "neutron") {
        newDiv.textContent = 'n0';
    }
    document.body.appendChild(newDiv);
    $(newDiv).draggable({
        stack: "div"
    });
}

async function resetCrafting() {
    document.getElementById("remove").currentTime = 0;
    document.getElementById("remove").play();

    document.querySelectorAll('.up_quark').forEach(el => el.remove());
    document.querySelectorAll('.down_quark').forEach(el => el.remove());
    document.querySelectorAll('.proton').forEach(el => el.remove());
    document.querySelectorAll('.neutron').forEach(el => el.remove());
    CraftingItems = [];

    document.getElementById('crafting_table').style.border = '4px dashed #0e0e0e';
    document.getElementById("crafting_button").disabled = true;
}

async function animateCrafting() {
    document.getElementById("double_pop").currentTime = 0;
    document.getElementById("double_pop").play();
    document.getElementById("information").style.opacity = '1';
    document.getElementById("crafting_table").style.border = '4px solid white';
    await delay(1000);
    document.getElementById("information").style.opacity = '0';
    document.getElementById("crafting_table").style.border = '4px dashed #0e0e0e';
}

async function elementCategory(AtomicNumber) { // Kill me
    if ([1, 3, 11, 19, 37, 55, 87].includes(AtomicNumber)) {
        return "periodic_table_element_alkali_metals";
    }
    if ([4, 12, 20, 38, 56, 88].includes(AtomicNumber)) {
        return "periodic_table_element_alkaline_earth_metals";
    }
    if ((AtomicNumber >= 21 && AtomicNumber <= 30) || (AtomicNumber >= 39 && AtomicNumber <= 48) || (AtomicNumber >= 72 && AtomicNumber <= 80) || (AtomicNumber >= 104 && AtomicNumber <= 112)) {
        return "periodic_table_element_transition_metals";
    }
    if ([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116, 117].includes(AtomicNumber)) {
        return "periodic_table_element_post_transition_metals";
    }
    if ([5, 14, 32, 33, 51, 52, 85].includes(AtomicNumber)) {
        return "periodic_table_element_metalloids";
    }
    if ([6, 7, 8, 9, 15, 16, 17, 34, 35, 53].includes(AtomicNumber)) {
        return "periodic_table_element_other_nonmetals";
    }
    if ([2, 10, 18, 36, 54, 86, 118].includes(AtomicNumber)) {
        return "periodic_table_element_noble_gases";
    }
    if (AtomicNumber >= 57 && AtomicNumber <= 71) {
        document.getElementById('La-Lu').className = "periodic_table_element_lanthanides";
        return "periodic_table_element_lanthanides";
    }
    if (AtomicNumber >= 89 && AtomicNumber <= 103) {
        document.getElementById('Ac-Lr').className = "periodic_table_element_actinides";
        return "periodic_table_element_actinides";
    }
}

async function godMode() {
    document.getElementById("thunder").currentTime = 0;
    document.getElementById("thunder").play();
    document.getElementById("god_mode_button").disabled = true;

    document.getElementById("button_proton").style.display = 'block';
    document.getElementById("button_neutron").style.display = 'block';
    document.getElementById("periodic_table_button").style.display = 'block';

    for(let i = 0; i < Elements.length; i++) {
        const category = await elementCategory(i + 1);
        document.getElementById(Elements[i]).className = category;
    }
}

async function Craftable() {
    let UpQuarks = 0;
    let DownQuarks = 0;
    let Proton = 0;
    let Neutron = 0;

    for(let i = 0; i < CraftingItems.length; i++) {
        if (CraftingItems[i].includes('up_quark')) {
            UpQuarks++;
        }
        if (CraftingItems[i].includes('down_quark')) {
            DownQuarks++;
        }
        if (CraftingItems[i].includes('proton')) {
            Proton++;
        }
        if (CraftingItems[i].includes('neutron')) {
            Neutron++;
        }
    }
    // Proton
    if (UpQuarks === 2 && DownQuarks === 1 && Proton === 0 && Neutron === 0) {
        document.getElementById("information").innerHTML = 'You have crafter a Proton!';
        animateCrafting();
        await delay(1000);
        resetCrafting();
        document.getElementById("button_proton").style.display = 'block';
    }
    // Neutron
    if (UpQuarks === 1 && DownQuarks === 2 && Proton === 0 && Neutron === 0) {
        document.getElementById("information").innerHTML = 'You have crafter a Neutron!';
        animateCrafting();
        await delay(1000);
        resetCrafting();
        document.getElementById("button_neutron").style.display = 'block';
    }
    // Deuterium (needed to unlock the periodic table)
    if (Proton === 1 && Neutron === 1 && UpQuarks === 0 && DownQuarks === 0) {
        document.getElementById("information").innerHTML = 'You have crafter Deuterium!';
        animateCrafting();
        await delay(1000);
        resetCrafting();
        document.getElementById("periodic_table_button").style.display = 'block';
    }
    // Other elements
    if ((Proton > 1 && Proton <= 20 && Neutron >= Proton - 1 && Neutron <= Proton + 1) ||
        (Proton > 20 && Neutron >= Math.round(Proton * 1.2) - 5 && Neutron <= Math.round(Proton * 1.2) + 5) &&
        DownQuarks === 0 &&
        UpQuarks === 0 &&
        ElementsCrafted[Proton + 1] === false) {

        ElementsCrafted[Proton + 1] = true;
        document.getElementById("information").innerHTML = 'You have crafted ' + Elements[Proton - 1];
        animateCrafting();
        await delay(1000);
        resetCrafting();
        const category = await elementCategory(Proton);
        document.getElementById(Elements[Proton - 1]).className = category;
    }
    else {
        document.getElementById("pop_crafting").currentTime = 0;
        document.getElementById("pop_crafting").play();
    }
}

// https://stackoverflow.com/questions/3221161/how-to-pop-up-an-alert-box-when-the-browsers-refresh-button-is-clicked
window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = '';
});
