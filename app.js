sessionStorage.setItem('index', 0);

const produkte = [];
const gemüse = [];
const fleisch = [];
const milchprodukte = [];

var gemüseListe = document.getElementById('GemüseListe');
var fleischListe = document.getElementById('FleischListe');
var milchprodukteListe = document.getElementById('MilchproduktListe');

document.getElementById('hinzufügen').addEventListener('click', () => bearbeiteProdukt(0));

for (i = 0; i < localStorage.length; i++) {
    const gespeichertesProdukt = JSON.parse(localStorage.getItem(localStorage.key(i)));
    gespeichertesProdukt.id = localStorage.key(i);
    produkte.push(gespeichertesProdukt);
}

produkte.forEach(produkt => {
    if (produkt.kategorie === "Gemüse") {
        gemüse.push(produkt)
    } else if (produkt.kategorie === "Fleisch") {
        fleisch.push(produkt)
    } else if (produkt.kategorie === "Milchprodukte") {
        milchprodukte.push(produkt)
    }
});

gemüse.sort((a, b) => new Date(a.ablaufdatum) - new Date(b.ablaufdatum));
fleisch.sort((a, b) => new Date(a.ablaufdatum) - new Date(b.ablaufdatum));
milchprodukte.sort((a, b) => new Date(a.ablaufdatum) - new Date(b.ablaufdatum));

gemüseListe.innerHTML = "";
fleischListe.innerHTML = "";
milchprodukteListe.innerHTML = "";

gemüse.forEach(produkt => {
    gemüseListe.appendChild(createChild(produkt));
});
fleisch.forEach(produkt => {
    fleischListe.appendChild(createChild(produkt));
});
milchprodukte.forEach(produkt => {
    milchprodukteListe.appendChild(createChild(produkt));
});

function createChild(produkt) {
    const neuesLi = document.createElement('li');
    const bearbeiten = document.createElement('button');
    const löschen = document.createElement('button');
    const name = document.createElement('div');
    const ablaufdatum = document.createElement('div');
    neuesLi.id = produkt.id;
    bearbeiten.addEventListener('click', () => bearbeiteProdukt(produkt.id));
    löschen.addEventListener('click', () => löscheProdukt(produkt.id));
    bearbeiten.innerHTML = "🖊"
    löschen.innerHTML = "🗑"
    name.innerHTML = produkt.name
    ablaufdatum.innerHTML = produkt.ablaufdatum    
    neuesLi.appendChild(name);
    neuesLi.appendChild(ablaufdatum);
    neuesLi.appendChild(bearbeiten);
    neuesLi.appendChild(löschen);
    farbeBestimmen(produkt, neuesLi);
    return neuesLi;
}

function farbeBestimmen(produkt, neuesLi) {
    const heute = new Date();
    const ablaufdatum = new Date(produkt.ablaufdatum)
    const tageBisAblauf = Math.ceil((ablaufdatum - heute) / 86400000);

    if (produkt.kategorie === 'Gemüse') {
        switch(true) {
            case (tageBisAblauf < 0):
                neuesLi.classList.add('rot');
                break;
            case (tageBisAblauf < 1):
                neuesLi.classList.add('orange');
                break;
            case (tageBisAblauf < 5):
                neuesLi.classList.add('gelb');
                break;
            default:
                neuesLi.classList.add('grün');
                break;
        }
    } else if (produkt.kategorie == "Fleisch" ) {
        switch(true) {
            case (tageBisAblauf < -1):
                neuesLi.classList.add('rot');
                break;
            case (tageBisAblauf < 0):
                neuesLi.classList.add('orange');
                break;
            case (tageBisAblauf < 2):
                neuesLi.classList.add('gelb');
                break;
            default:
                neuesLi.classList.add('grün');
                break;
        }
    } else if (produkt.kategorie == "Milchprodukte" ) {
        switch(true) {
            case (tageBisAblauf < 0):
                neuesLi.classList.add('rot');
                break;
            case (tageBisAblauf < 1):
                neuesLi.classList.add('orange');
                break;
            case (tageBisAblauf < 3):
                neuesLi.classList.add('gelb');
                break;
            default:
                neuesLi.classList.add('grün');
                break;
        }
    }
}

function bearbeiteProdukt(i) {
    sessionStorage.setItem('index', i)
    console.log(sessionStorage.getItem('index'))
    window.open('form.html', '_self');
}

function löscheProdukt(i) {
    localStorage.removeItem(i);
    window.open('index.html', '_self');
}
