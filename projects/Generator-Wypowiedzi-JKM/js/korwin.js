const delay = ms => new Promise(res => setTimeout(res, ms)); // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

const firstElement = document.getElementById("first");
const secondElement = document.getElementById("second");
const thirdElement = document.getElementById("third");
const fourthElement = document.getElementById("fourth");
const fifthElement = document.getElementById("fifth");
const sixthElement = document.getElementById("sixth");

const fajajaja = document.getElementById("audio");

async function generate() {
    firstElement.innerHTML = "";
    secondElement.innerHTML = "";
    thirdElement.innerHTML = "";
    fourthElement.innerHTML = "";
    fifthElement.innerHTML = "";
    sixthElement.innerHTML = "";

    let First = [
        "Proszę zwrócić uwagę, że",
        "I tak mam trzy razy mniej czasu, więc proszę mi pozwolić powiedzieć:",
        "Państwo się śmieją, ale",
        "Ja nie potrzebowałem edukacji seksualnej, żeby wiedzieć, że",
        "No niestety:",
        "Gdzie leży przyczyna problemu? Ja państwu powiem:",
        "Państwo chyba nie widzą, że",
        "Oświadczam kategorycznie:",
        "Powtarzam:",
        "Powiedzmy to z całą mocą:",
        "W Polsce dzisiaj",
        "Państwo sobie nie zdają sprawy, że",
        "To ja przepraszam bardzo:",
        "Otóż nie wiem, czy pan wie, że",
        "Yyyyy...",
        "Ja chcę powiedzieć jedną rzecz:",
        "Trzeba powiedzieć jasno:",
        "Jak powiedział wybitny krakowianin Stanisław Lem,",
        "Proszę mnie dobrze zrozumieć:",
        "Ja chciałem państwu przypomnieć, że",
        "Niech państwo nie mają złudzeń:",
        "Powiedzmy to wyraźnie:",

    ];
    let Second = [
        "właściciele niewolników",
        "związkowcy",
        "trockiści",
        "tak zwane dzieci kwiaty",
        "rozmaici urzędnicy",
        "federaci",
        "etatyści",
        "ci durnie i złodzieje",
        "ludzie wybrani głosami meneli spod budki z piwem",
        "socjaliści pobożni",
        "socjaliści bezbożni",
        "komuniści z krzyżem w zębach",
        "agenci obcych służb",
        "członkowie Bandy Czworga",
        "pseudo-masoni z Wielkiego Wschodu Francji",
        "przedstawiciele czerwonej hołoty",
        "ci wszyscy (tfu!) geje",
        "funkcjonariusze reżymowej telewizji",
        "tak zwani ekolodzy",
        "ci wszyscy (tfu!) demokraci",
        "agenci bezpieki",
        "feminazistki",
    ];
    let Third = [
        "po przeczytaniu Manifestu komunistycznego",
        "którymi się brzydzę",
        "których nienawidzę",
        "z okolic Gazety Wyborczej",
        "czyli taka żydokomuna",
        "odkąd zniesiono karę śmierci",
        "którymi pogardzam",
        "których miejsce w normalnym kraju jest w więzieniu",
        "na polecenie Brukseli",
        "posłusznie",
        "bezmyślnie",
        "z nieprawdopodobną pogardą dla człowieka",
        "za pieniądze podatników",
        "zgodnie z ideologią LGBTQZ",
        "za wszelką cenę",
        "zupełnie bezkarnie",
        "całkowicie bezczelnie",
        "o poglądach na lewo od komunizmu",
        "celowo i świadomie",
        "z premedytacją",
        "od czasów Okrągłego Stołu",
        "w ramach postępu",
    ];
    let Fourth = [
        "udają homoseksualistów",
        "niszczą rodzinę",
        "idą do polityki",
        "zakazują góralom robienia oscypków",
        "organizują paraolimpiady",
        "wprowadzają ustrój, w którym raz na cztery lata można wybrać sobie pana",
        "ustawiają fotoradary",
        "wprowadzają dotacje",
        "wydzielają buspasy",
        "podnoszą wiek emerytalny",
        "rżną głupa",
        "odbierają dzieci rodzicom",
        "wprowadzają absurdalne przepisy",
        "umieszczają dzieci w szkołach koedukacyjnych",
        "wprowadzają partytety",
        "nawołują do podniesienia podatków",
        "próbują wyrzucić kierowców z miast",
        "próbują skłócić Polskę z Rosją",
        "głoszą brednię o globalnym ociepleniu",
        "zakazują posiadania broni",
        "nie dopuszczają prawicy do władzy",
        "uczą dzieci homoseksualizmu",
    ];
    let Fifth = [
        "żeby poddawać wszystkich tresurze",
        "bo taka jest ich natura",
        "bo chcą wszystko kontrolować",
        "bo nie rozumieją, że socjalizm nie działa",
        "żeby wreszcie zapanował socjalizm",
        "dokładnie tak jak tow. Janosik",
        "zamiast pozwolić ludziom zarabiać",
        "żeby wyrwać kobiety z domu",
        "bo to jest w interesie tak zwanych ludzi pracy",
        "zamiast pozwolić decydować konsumentowi",
        "żeby nie opłacało się mieć dzieci",
        "zamiast obniżyć podatki",
        "bo nie rozumieją, że selekcja naturalna jest czymś dobrym",
        "żeby mężczyźni przestali być agresywni",
        "bo dzięki temu mogą brać łapówki",
        "bo dzięki temu mogą kraść",
        "bo dostają za to pieniądze",
        "bo tak się uczy w państwowej szkole",
        "bo bez tego (tfu!) demokracja nie może istnieć",
        "bo głupich jest więcej niż mądrych",
        "bo chcą tworzyć raj na ziemi",
        "bo chcą niszczyć cywilizację białego człowieka",
    ];
    let Sixth = [
        "co ma zresztą tyle samo sensu, co zawody w szachach dla debili.",
        "co zostało dokładnie zaplanowane w Magdalence przez śp. generała Kiszczaka.",
        "i trzeba być idiotą, żeby ten system popierać.",
        "ale nawet ja jeszcze dożyję normalnych czasów.",
        "co dowodzi, że wyskrobano nie tych, co trzeba.",
        "a zwykłym ludziom wmawiają, że im coś „dadzą”.",
        "– cóż: chcielście (tfu!) demokracji, to macie.",
        "dlatego trzeba zlikwidować koryto, a nie zmieniać świnie.",
        "a wystarczyło przestać wypłacać zasiłki.",
        "podczas gdy normalni ludzie uważani są za dziwaków.",
        "co w wieku XIX po prostu by wyśmiano.",
        "– dlatego w społeczeństwie jest równość, a powinno być rozwarstwienie.",
        "co prowadzi Polskę do katastrofy.",
        "– dlatego trzeba przywrócić normalność.",
        "ale w wolnej Polsce pójdą siedzieć.",
        "przez kolejne kadencje.",
        "o czym się nie mówi.",
        "i właśnie dlatego Europa umiera.",
        "ale przyjdą muzułmanie i zrobią porządek.",
        "tak samo zresztą jak za Hitlera.",
        "proszę zobaczyć co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.",
        "co sto lat temu nikomu nie przyszłoby nawet do głowy",
    ];
    // document.getElementById("first").innerHTML = First[Math.floor(Math.random() * First.length)];
    // document.getElementById("second").innerHTML = "&nbsp;" + Second[Math.floor(Math.random() * Second.length)];
    // document.getElementById("third").innerHTML = "&nbsp;" + Third[Math.floor(Math.random() * Third.length)];
    // document.getElementById("fourth").innerHTML = "&nbsp;" + Fourth[Math.floor(Math.random() * Fourth.length)];
    // document.getElementById("fifth").innerHTML = "&nbsp;" + Fifth[Math.floor(Math.random() * Fifth.length)];
    // document.getElementById("sixth").innerHTML = "&nbsp;" + Sixth[Math.floor(Math.random() * Sixth.length)];

    let first = First[Math.floor(Math.random() * First.length)];
    let second = Second[Math.floor(Math.random() * Second.length)];
    let third = Third[Math.floor(Math.random() * Third.length)];
    let fourth = Fourth[Math.floor(Math.random() * Fourth.length)];
    let fifth = Fifth[Math.floor(Math.random() * Fifth.length)];
    let sixth = Sixth[Math.floor(Math.random() * Sixth.length)];

    let totalLength =  first.length +
                                second.length +
                                third.length +
                                fourth.length +
                                fifth.length +
                                sixth.length;

    let pause = 2600 / totalLength;
    let str = "";

    fajajaja.play();

    await delay(200);

    first = first + "&nbsp;";

    for (let i = 0; i < first.length; i++) {
        str = str + first[i];
        firstElement.innerHTML = str;
        await delay (pause);
    }

    str = "";
    second = second + "&nbsp;";

    for (let i = 0; i < second.length; i++) {
        str = str + second[i];
        secondElement.innerHTML = str;
        await delay (pause);
    }

    str = "";
    third = third + "&nbsp;";

    for (let i = 0; i < third.length; i++) {
        str = str + third[i];
        thirdElement.innerHTML = str;
        await delay (pause);
    }

    str = "";
    fourth = fourth + "&nbsp;";

    for (let i = 0; i < fourth.length; i++) {
        str = str + fourth[i];
        fourthElement.innerHTML = str;
        await delay (pause);
    }

    str = "";
    fifth = fifth + "&nbsp;";

    for (let i = 0; i < fifth.length; i++) {
        str = str + fifth[i];
        fifthElement.innerHTML = str;
        await delay (pause);
    }

    str = "";
    sixth = sixth + "&nbsp;";

    for (let i = 0; i < sixth.length; i++) {
        str = str + sixth[i];
        sixthElement.innerHTML = str;
        await delay (pause);
    }
}