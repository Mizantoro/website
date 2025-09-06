async function generate() {
    let First = [
        "Szanowni Państwo,",
        "Pani redaktor",
        "Panie pośle",
        "Cały czas powtarzam,",
    ];
    let Second = [
        "komuniści z Brukseli",
        "niemieckie sądy",
        "Bruksela i Berlin",
        "homoseksualiści",
        "Tusk i spółka",
    ];
    let Third = [
        "narracją polityków niemieckich",
        "przeciwko polskim interesom",
        "zgodnie z doktryną komunistyczną",
        "kontynuując myśl Hitlera",
    ];
    let Fourth = [
        "narzucają nam lewackie ideologie,",
        "każą nam zabijać dzieci,",
        "odbierają nam suwerenność,",
        "szantażują nas,",
    ];
    let Fifth = [
        "ponieważ boją się silnej Polski.",
        "bo stoją po stronie cywilizacji śmierci.",
        "ponieważ tęskną za Trzecią Rzeszą.",
        "bo chcą zniszczyć naszą cywilizację.",
    ];
    let Sixth = [
        "Nie ma na to naszej zgody.",
       "Ale my się nie damy!",
        "Nie pozwolimy na to!",
        "Nie podnosi się ręki na Polskę!",
    ];
    let Seventh = [
        "Nie jesteśmy obozem miękiszonów.",
        "Wszyscy jesteśmy równi wobec prawa.",
        "Zjednoczona prawica stoi po stronie Polaków!",
        "Musimy chronić polską rację stanu.",
    ];
    document.getElementById("first").innerHTML = First[Math.floor(Math.random() * 4)];
    document.getElementById("second").innerHTML = "&nbsp;" + Second[Math.floor(Math.random() * 5)];
    document.getElementById("third").innerHTML = "&nbsp;" + Third[Math.floor(Math.random() * 4)];
    document.getElementById("fourth").innerHTML = "&nbsp;" + Fourth[Math.floor(Math.random() * 4)];
    document.getElementById("fifth").innerHTML = "&nbsp;" + Fifth[Math.floor(Math.random() * 4)];
    document.getElementById("sixth").innerHTML = "&nbsp;" + Sixth[Math.floor(Math.random() * 4)];
    document.getElementById("seventh").innerHTML = "&nbsp;" + Seventh[Math.floor(Math.random() * 4)];
}