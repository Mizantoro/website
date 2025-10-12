// This code is just awful, but this was a pain in the ass. Don't judge me
const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
let DNA = "";
let DNA2 = "";
let RNA = "";
let codons = "";
let RNAstringNumber = 0;

const Codons = {
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "CUU": "Leucine",
    "CUC": "Leucine",
    "CUA": "Leucine",
    "CUG": "Leucine",
    "AUU": "Isoleucine",
    "AUC": "Isoleucine",
    "AUA": "Isoleucine",
    "AUG": "Methionine",
    "GUU": "Valine",
    "GUC": "Valine",
    "GUA": "Valine",
    "GUG": "Valine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "CCU": "Proline",
    "CCC": "Proline",
    "CCA": "Proline",
    "CCG": "Proline",
    "ACU": "Threonine",
    "ACC": "Threonine",
    "ACA": "Threonine",
    "ACG": "Threonine",
    "GCU": "Alanine",
    "GCC": "Alanine",
    "GCA": "Alanine",
    "GCG": "Alanine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "CAU": "Histidine",
    "CAC": "Histidine",
    "CAA": "Glutamine",
    "CAG": "Glutamine",
    "AAU": "Asparagine",
    "AAC": "Asparagine",
    "AAA": "Lysine",
    "AAG": "Lysine",
    "GAU": "Aspartate",
    "GAC": "Aspartate",
    "GAA": "Glutamate",
    "GAG": "Glutamate",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "CGU": "Arginine",
    "CGC": "Arginine",
    "CGA": "Arginine",
    "CGG": "Arginine",
    "AGU": "Serine",
    "AGC": "Serine",
    "AGA": "Arginine",
    "AGG": "Arginine",
    "GGU": "Glycine",
    "GGC": "Glycine",
    "GGA": "Glycine",
    "GGG": "Glycine",
    "UAA": "Stop",
    "UAG": "Stop",
    "UGA": "Stop"
};

async function addNucleotides(nucleotide, acidType) {
    if (acidType === "RNA") {
        if (nucleotide === "adenine") {
            RNA += "A";
        }
        if (nucleotide === "guanine") {
            RNA += "G";
        }
        if (nucleotide === "cytosine") {
            RNA += "C";
        }
        if (nucleotide === "uracil") {
            RNA += "U";
        }
        document.getElementById("RNA_string").innerHTML = RNA;
    }
    else {
        if (nucleotide === "adenine") {
            DNA += "A";
        }
        if (nucleotide === "guanine") {
            DNA += "G";
        }
        if (nucleotide === "cytosine") {
            DNA += "C";
        }
        if (nucleotide === "thymine") {
            DNA += "T";
        }
        document.getElementById("DNA_string").innerHTML = "5' " + DNA + " 3' ";
    }
}

async function recognizeCodons() {
    if (RNAstringNumber === 0) {
        animatePolymerase("ribosome", "left");
    }
    else {
        animatePolymerase("ribosome", "right");
    }
    await delay(2000);
    let tmp = "";
    codons = "";
    for(let i = 0; i < RNA.length; i += 3) {
        tmp = RNA.substring(i, i + 3);
        if (tmp in Codons) {
            codons += Codons[tmp] + " ";
        }
        else {
            codons += "Codon_not_complete! ";
        }
        await delay(40);
    }
    document.getElementById("codon_string").innerHTML = codons;
    document.getElementById("translation").style.display = "none";
    document.getElementById("end").style.display = "block";
}

async function animatePolymerase(type, direction) {
    console.log(direction);
    let polymerase;
    if (type === "DNA") {
        polymerase = document.getElementById("DNA_polymerase");
    }
    else if (type === "RNA") {
        polymerase = document.getElementById("RNA_polymerase");
    }
    else {
        polymerase = document.getElementById("ribosome");
    }
    if (direction === "left") {
        polymerase.style.display = "flex";
        polymerase.style.right = "50px";
        polymerase.style.top = "84px";
        await delay(1000);
        polymerase.style.transition = "2s ease-in";
        polymerase.style.right = "calc(100% - 200px)";
        await delay(3000);
        polymerase.style.transition = "0s";
        polymerase.style.display = "none";
    }
    else {
        polymerase.style.display = "flex";
        polymerase.style.left = "50px";
        polymerase.style.top = "84px";
        await delay(1000);
        polymerase.style.transition = "2s ease-in";
        polymerase.style.left = "calc(100% - 200px)";
        await delay(3000);
        polymerase.style.transition = "0s";
        polymerase.style.display = "none";
    }
}

async function contentClear() {
    DNA = "";
    DNA2 = "";
    RNA = "";
    codons = "";
    RNAstringNumber = 0;
    document.getElementById("DNA_string").innerHTML = DNA;
    document.getElementById("DNA_string_2").innerHTML = DNA2;
    document.getElementById("RNA_string").innerHTML = RNA;
    document.getElementById("codon_string").innerHTML = codons;
    document.getElementById("DNA_string").style.display = "block";
    document.getElementById("DNA_string_2").style.display = "block";
    document.getElementById("RNA_string").style.display = "block";
    document.getElementById("codon_string").style.display = "block";
    document.getElementById("createRNA").style.display = "none";
    document.getElementById("createDNA").style.display = "none";
    document.getElementById("DNAorRNA").style.display = "block";
    document.getElementById("end").style.display = "none";
}

async function showButtons(type) {
    document.getElementById("DNAorRNA").style.display = "none";
    if (type === "RNA") {
        document.getElementById("createRNA").style.display = "flex";
    }
    else {
        document.getElementById("createDNA").style.display = "flex";
    }
}

async function createSecondStringDNA() {
    animatePolymerase("DNA", "left");
    const secondString = document.getElementById("DNA_string_2");
    DNA2 = "";
    await delay(2000);
    secondString.style.display = "block";
    for(let i = 0; i < DNA.length; i++) {
        if (DNA[i] === "A") {
            DNA2 += "T";
        }
        if (DNA[i] === "T") {
            DNA2 += "A";
        }
        if (DNA[i] === "C") {
            DNA2 += "G";
        }
        if (DNA[i] === "G") {
            DNA2 += "C";
        }
        await delay(40);
        secondString.innerHTML = "3' " + DNA2 + " 5'";
        document.getElementById("createDNA").style.display = "none";
        document.getElementById("transcription").style.display = "block";
    }
}

async function createRNAfromDNA(string) {
    const RNAstring = document.getElementById("RNA_string");
    if (string === 0) {
        document.getElementById("DNA_string_2").style.display = "none";
        animatePolymerase("RNA", "left");
        RNAstringNumber = 0;
    }
    else {
        document.getElementById("DNA_string").style.display = "none";
        animatePolymerase("RNA", "right");
        RNAstringNumber = 1;
    }
    await delay(2000);
    for (let i = 0; i < DNA.length; i++) {
        if (string === 0) {
            if (DNA[i] === "A") {
                RNA += "U";
            }
            if (DNA[i] === "T") {
                RNA += "A";
            }
            if (DNA[i] === "G") {
                RNA += "C";
            }
            if (DNA[i] === "C") {
                RNA += "G";
            }
        }
        else {
            if (DNA2[i] === "A") {
                RNA += "U";
            }
            if (DNA2[i] === "T") {
                RNA += "A";
            }
            if (DNA2[i] === "G") {
                RNA += "C";
            }
            if (DNA2[i] === "C") {
                RNA += "G";
            }
        }
        await delay(40);
        if (string === 0) {
            RNAstring.innerHTML = "3' " + RNA + " 5'";
        }
        else {
            RNAstring.innerHTML = "5' " + RNA + " 3'";
        }
    }
    document.getElementById("transcription").style.display = "none";
    document.getElementById("translation").style.display = "block";
    await delay(1000);
    DNA = "";
    DNA2 = "";
    document.getElementById("DNA_string").innerHTML = DNA;
    document.getElementById("DNA_string_2").innerHTML = DNA2;
}
