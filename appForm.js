document.getElementById('produktHinzufügen').addEventListener('submit', function(event) {
    event.preventDefault();

    var produktname = document.getElementById('produktname').value;
    var ablaufdatum = document.getElementById('ablaufdatum').value;
    var kategorie = document.getElementById('kategorie').value;

    const product = {
        name: produktname,
        ablaufdatum: ablaufdatum,
        kategorie: kategorie
    };

    if (sessionStorage.getItem('index') == 0) {
        var key = 1;
        while (localStorage.getItem(key) !== null) {
            key++;
        }   
        localStorage.setItem(key, JSON.stringify(product));
    } else {
        localStorage.setItem(sessionStorage.getItem('index'), JSON.stringify(product));
        sessionStorage.setItem('index', 0);
    }
    window.open('index.html', '_self');
});

if (sessionStorage.getItem('index') != 0) {
    document.getElementById('produktname').value = JSON.parse(localStorage.getItem(sessionStorage.getItem('index'))).name;
    document.getElementById('ablaufdatum').value = JSON.parse(localStorage.getItem(sessionStorage.getItem('index'))).ablaufdatum;
    document.getElementById('kategorie').value = JSON.parse(localStorage.getItem(sessionStorage.getItem('index'))).kategorie;
    document.getElementById('submit').value = "speichern";
}
