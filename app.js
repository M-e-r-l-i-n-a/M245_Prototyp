document.getElementById('produktHinzufügen').addEventListener('submit', function(event) {
    event.preventDefault();

    var produktname = this.elements['produktname'].value;
    var ablaufdatum = this.elements['ablaufdatum'].value;

    console.log('Produktname: ' + produktname + ', Ablaufdatum: ' + ablaufdatum);
    window.open('index.html', '_self');
});