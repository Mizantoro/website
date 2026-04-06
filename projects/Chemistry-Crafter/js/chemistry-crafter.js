let container = [{ group: "none", bond: 1 }];
let element = {
    group: "none",
    bond: 1
};
let output = document.getElementById("string_container");
let nameOutput = document.getElementById("name_container");
let index = 1;
const Prefix = [
    // C1–C10
    "meth",
    "eth",
    "prop",
    "but",
    "pent",
    "hex",
    "hept",
    "oct",
    "non",
    "dec",

    // C11–C20
    "undec",
    "dodec",
    "tridec",
    "tetradec",
    "pentadec",
    "hexadec",
    "heptadec",
    "octadec",
    "nonadec",
    "eicos",

    // C21–C29
    "heneicos",
    "docos",
    "tricos",
    "tetracos",
    "pentacos",
    "hexacos",
    "heptacos",
    "octacos",
    "nonacos",
];
const multiplicativePrefixes = [
    "mono",
    "di",
    "tri",
    "tetra",
    "penta",
    "hexa",
    "hepta",
    "octa",
    "nona",
    "deca",

    "undeca",
    "dodeca",
    "trideca",
    "tetradeca",
    "pentadeca",
    "hexadeca",
    "heptadeca",
    "octadeca",
    "nonadeca",
    "eicosa",

    "heneicosa",
    "docosa",
    "tricosa",
    "tetracosa",
    "pentacosa",
    "hexacosa",
    "heptacosa",
    "octacosa",
    "nonacosa"
];

document.getElementById("input").addEventListener("input", function () {
    index = Number(this.value);
});

function addCarbon() {
    if (container.length > 1 && container[container.length - 1].group === "CHO") {
        container.pop();
        container.push({ group: "none", bond: 1 });
        container.push({ group: "CHO", bond: 1 });
    }
    else {
        container.push({ group: "none", bond: 1 });
    }
}

function removeCarbon() {
    if (container.length <= 1) {
        return;
    }
    container.pop();
}

function addSingleBound() {
    if (index === container.length) {
        return;
    }
    container[index - 1].bond = 1;
}

function addDoubleBound() {
    if (index === container.length) {
        return;
    }
    if (index === 1  && container[0].group === "CHO") {
        return;
    }
    if (index === container.length - 1 && container[container.length - 1].group === "CHO") {
        return;
    }
    if (index > 1 && container[index - 2].bond === 3) {
        return;
    }
    if (index > 1 && container[index - 1].group === "CO") {
        return;
    }
    if (container[index].bond === 3) {
        return;
    }
    if (container[index].group === "CO") {
        return;
    }
    container[index - 1].bond = 2;
}

function addTripleBound() {
    if (index === container.length) {
        return;
    }
    if (container[index - 1].group !== "none") {
        return;
    }
    if (container[index].group !== "none") {
        return;
    }
    if (index === 1  && container[0].group === "CHO") {
        return;
    }
    if (index === container.length - 1 && container[container.length - 1].group === "CHO") {
        return;
    }
    if (container[index].bond > 1 && index !== container.length) {
        return;
    }
    if (index > 1 && container[index - 2].bond > 1) {
        return;
    }
    container[index - 1].bond = 3;
}

function addOH() {
    if (container[index - 1].bond === 3) {
        return;
    }
    container[index - 1].group = "OH";
}

function addNH2() {
    if (container[index - 1].bond === 3) {
        return;
    }
    container[index - 1].group = "NH2";
}

function addCHO() {
    if (index === 1) {
        if (container[index - 1].bond > 1) {
            return;
        }
        container[index - 1].group = "CHO";
    }
    else if (index === container.length) {
        if (container[index - 2].bond > 1) {
            return;
        }
        container[index - 1].group = "CHO";
    }
    else {
        if (container[index - 2].bond > 1 || container[index].bond > 1) {
            return;
        }
        if (index > 1 && container[index - 1].bond > 1) {
            return;
        }
        container[index - 1].group = "CO";
    }
}

function removeGroup() {
    container[index - 1].group = "none";
}

function updateOutput() {
    let str="";
    if (container.length === 1 && container[0].group === "none") {
        str += "C";
        str += "H4";
    }
    else if (container.length === 1 && container[0].group !== "none") {
        if (container[0].group === "CHO") {
            str += "H–CHO";
        }
        else {
            let group = container[0].group;
            str += "C";
            str += "H3";
            str += "(" + group + ")";
        }
    }
    else {
        for (let i = 0; i < container.length; i++) {
            str += "C";
            if (container[i].group === "none") {
                if (i === 0) {
                    if (container[i].bond === 1) {
                        str += "H3";
                        str += " - ";
                    }
                    if (container[i].bond === 2) {
                        str += "H2";
                        str += " = ";
                    }
                    if (container[i].bond === 3) {
                        str += "H";
                        str += " &equiv; ";
                    }
                }
                else if (i === container.length - 1) {
                    if (container[i - 1].bond === 1) {
                        str += "H3";
                        str += "";
                    }
                    if (container[i - 1].bond === 2) {
                        str += "H2";
                        str += "";
                    }
                    if (container[i - 1].bond === 3) {
                        str += "H";
                        str += "";
                    }
                }
                else {
                    if (container[i - 1].bond === 1) {
                        if (container[i].bond === 1) {
                            str += "H2";
                            str += " - ";
                        }
                        if (container[i].bond === 2) {
                            str += "H";
                            str += " = ";
                        }
                        if (container[i].bond === 3) {
                            str += "";
                            str += " &equiv; ";
                        }
                    }
                    if (container[i - 1].bond === 2) {
                        if (container[i].bond === 1) {
                            str += "H";
                            str += " - ";
                        }
                        if (container[i].bond === 2) {
                            str += "";
                            str += " = ";
                        }
                        if (container[i].bond === 3) {
                            str += "";
                            str += " &equiv; ";
                        }
                    }
                    if (container[i - 1].bond === 3) {
                        if (container[i].bond === 1) {
                            str += "";
                            str += " - ";
                        }
                        if (container[i].bond === 2) {
                            str += "";
                            str += " = ";
                        }
                        if (container[i].bond === 3) {
                            str += "";
                            str += " &equiv; ";
                        }
                    }
                }
            }
            else {
                let group = container[i].group;
                if (group === "CHO") {
                    if (i === container.length - 1) {
                        str += "HO";
                    }
                    else {
                        str += "HO - ";
                    }
                }
                else if (container[i].group === "CO") {
                    str += "O - ";
                }
                else {
                    if (i === 0) {
                        if (container[i].bond === 1) {
                            str += "H2";
                            str += "(" + group + ")"
                            str += " - ";
                        }
                        if (container[i].bond === 2) {
                            str += "H1";
                            str += "(" + group + ")"
                            str += " = ";
                        }
                        if (container[i].bond === 3) {
                            str += "";
                            str += "(" + group + ")"
                            str += " &equiv; ";
                        }
                    }
                    else if (i === container.length - 1) {
                        if (container[i - 1].bond === 1) {
                            str += "H2";
                            str += "(" + group + ")";
                            str += "";
                        }
                        if (container[i - 1].bond === 2) {
                            str += "H1";
                            str += "(" + group + ")";
                            str += "";
                        }
                        if (container[i - 1].bond === 3) {
                            str += "";
                            str += "(" + group + ")";
                            str += "";
                        }
                    }
                    else {
                        if (container[i - 1].bond === 1) {
                            if (container[i].bond === 1) {
                                str += "H";
                                str += "(" + group + ")"
                                str += " - ";
                            }
                            if (container[i].bond === 2) {
                                str += "";
                                str += "(" + group + ")"
                                str += " = ";
                            }
                            if (container[i].bond === 3) {
                                str += "";
                                str += "(" + group + ")"
                                str += " &equiv; ";
                            }
                        }
                        if (container[i - 1].bond === 2) {
                            if (container[i].bond === 1) {
                                str += "";
                                str += "(" + group + ")"
                                str += " - ";
                            }
                            if (container[i].bond === 2) {
                                str += "";
                                str += "(" + group + ")"
                                str += " = ";
                            }
                            if (container[i].bond === 3) {
                                str += "";
                                str += "(" + group + ")"
                                str += " &equiv; ";
                            }
                        }
                        if (container[i - 1].bond === 3) {
                            if (container[i].bond === 1) {
                                str += "";
                                str += "(" + group + ")"
                                str += " - ";
                            }
                            if (container[i].bond === 2) {
                                str += "";
                                str += "(" + group + ")"
                                str += " = ";
                            }
                            if (container[i].bond === 3) {
                                str += "";
                                str += "(" + group + ")"
                                str += " &equiv; ";
                            }
                        }
                    }
                }
            }
        }
    }
    output.innerHTML = str;
}

// function findHighestGroup() {
//     const hasOH = container.some(c => c.group === "OH");
//     const hasCHO = container.some(c => c.group === "CHO");
//     const hasCO = container.some(c => c.group === "CO");
//     const hasNH2 = container.some(c => c.group === "NH2");
//
//     if (hasCHO) {
//         return "CHO";
//     }
//
//     if (hasCO) {
//         return "CO";
//     }
//
//     if (hasOH) {
//         return "OH";
//     }
//
//     if (hasNH2) {
//         return "NH2";
//     }
//
//     return "";
// }
//
// function findHigherEnd() {
//     let original = [...container];
//     let reversed = reverseAndFix();
//     let highestGroup = findHighestGroup();
//     if (highestGroup === "") {
//         for (let i = 0; i < original.length; i++) {
//             if (original[i].bond > 1 && reversed[i].bond > 1) {
//                 if (original[i].bond > reversed[i].bond) {
//                     return original;
//                 }
//                 else {
//                     return reversed;
//                 }
//             }
//             if (original[i].bond > 1) {
//                 return original;
//             }
//             if (reversed[i].bond > 1) {
//                 return reversed;
//             }
//         }
//     }
//     else {
//         for (let i = 0; i < original.length; i++) {
//             if (original[i].group === highestGroup) {
//                 return original;
//             }
//             if (reversed[i].group === highestGroup) {
//                 return reversed;
//             }
//         }
//     }
//     return original;
// }

function updateName() {
    // let container = findHigherEnd();
    let str = "";
    let highestGroup = "";

    const hasDouble = container.some(c => c.bond === 2);
    const hasTriple = container.some(c => c.bond === 3);
    const hasOH = container.some(c => c.group === "OH");
    const hasCHO = container.some(c => c.group === "CHO");
    const hasCO = container.some(c => c.group === "CO");
    const hasNH2 = container.some(c => c.group === "NH2");

    function updatePrefix() {
        str += Prefix[container.length - 1];
        if (hasDouble) {
            str += "-";
            let indexes = [];
            for (let i = 0; i < container.length; i++) {
                if (container[i].bond === 2) {
                    indexes.push(i);
                }
            }
            if (container.length > 2) {
                for (let i = 0; i < indexes.length; i++) {
                    str += (indexes[i] + 1) + ",";
                }
            }
            str = str.slice(0, -1);
            str += "-";
            if (indexes.length > 1) {
                str += multiplicativePrefixes[indexes.length - 1];
            }
            str += "ene";
        }

        if (hasTriple) {
            str += "-";
            let indexes = [];
            for (let i = 0; i < container.length; i++) {
                if (container[i].bond === 3) {
                    indexes.push(i);
                }
            }
            if (container.length > 2) {
                for (let i = 0; i < indexes.length; i++) {
                    str += (indexes[i] + 1) + ",";
                }
            }
            str = str.slice(0, -1);
            str += "-";
            if (indexes.length > 1) {
                str += multiplicativePrefixes[indexes.length - 1];
            }
            str += "yne";
        }

        if (!hasTriple && !hasDouble) {
            str += "ane";
        }
    }

    let groups = [];

    if (hasNH2) {
        highestGroup = "NH2";
        groups.push("NH2");
    }

    if (hasOH) {
        highestGroup = "OH";
        groups.push("OH");
    }

    if (hasCO) {
        highestGroup = "CO";
        groups.push("CO");
    }

    if (hasCHO) {
        highestGroup = "CHO";
        groups.push("CHO");
    }

    if (groups.length > 0) {
        for (let i = 0; i < groups.length; i++) {
            if (highestGroup === groups[i]) {
                updatePrefix();
                str += "-";
                let indexes = [];
                for (let j = 0; j < container.length; j++) {
                    if (container[j].group === highestGroup) {
                        indexes.push(j);
                    }
                }
                if ((container.length > 2) && (highestGroup !== "CHO" || indexes.length > 1)) {
                    for (let j = 0; j < indexes.length; j++) {
                        str += (indexes[j] + 1) + ",";
                    }
                }
                str = str.slice(0, -1);
                if (highestGroup === "CHO" && indexes.length < 2) {
                    str = str.slice(0, -1);
                }
                else {
                    str += "-";
                }
                if (indexes.length > 1) {
                    str += multiplicativePrefixes[indexes.length - 1];
                }
                if (highestGroup === "CHO") {
                    str += "al";
                }
                if (highestGroup === "CO") {
                    str += "one";
                }
                if (highestGroup === "OH") {
                    str += "ol";
                }
                if (highestGroup === "NH2") {
                    str += "amine";
                }
            }
            else {
                str += "-";
                let indexes = [];
                for (let j = 0; j < container.length; j++) {
                    if (container[j].group === groups[i]) {
                        indexes.push(j);
                    }
                }
                if ((container.length > 2) && (groups[i] !== "CHO" || indexes.length > 1)) {
                    for (let j = 0; j < indexes.length; j++) {
                        str += (indexes[j] + 1) + ",";
                    }
                }
                str = str.slice(0, -1);
                if (groups[i] === "CHO" && indexes.length < 2) {
                    str = str.slice(0, -1);
                }
                else {
                    str += "-";
                }
                if (indexes.length > 1) {
                    str += multiplicativePrefixes[indexes.length - 1];
                }
                if (groups[i] === "CHO") {
                    str += "formyl";
                }
                if (groups[i] === "CO") {
                    str += "oxo";
                }
                if (groups[i] === "OH") {
                    str += "hydroxy";
                }
                if (groups[i] === "NH2") {
                    str += "amino";
                }

                if (str[0] === "-") {
                    str = str.slice(1);
                }
            }
        }
    }
    else {
        updatePrefix();
    }

    nameOutput.innerHTML = str;
}