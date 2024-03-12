# M245_Prototyp

## Anforderungen
Nr. |	Typ |	Beschreibung
--- | --- | ---
1	|	Funktional	|	Produkte können mit Produktnamen und Ablaufdatum eingetragen werden
2	|	Funktional	|	Es können nur existierende Daten eingetragen werden
3	|	Funktional	|	Die Produkte werden nach dem Ablaufdatum aufsteigend sortiert
4	|	Funktional	|	Die Produktnamen und Ablaufdaten können bearbeitet werden
5	|	Funktional	|	Die Produkte können gelöscht werden
6	|	Qualität	|	Das Programm ist benutzerfreundlich
7	|	Randbedingungen	|	Das Programm wird von Elena Tafelski geschrieben

## Testfallspezifikation
Nummer | Voraussetzung |	Eingabe |	Erwartete Ausgabe
--- | --- | --- | ---
1.1 |	Programm gestartet | Auf dem Button 'Produkt hinzufügen' drücken |	Eingabefelder für den Produktnamen und Ablaufdatum und ein Button 'hinzufügen' erscheinen
1.2 |	Programm gestartet, auf den Button 'Podukt hinzufügen' gedrückt | Produtname und Ablaufdatum eingeben, auf den Button 'hinzufügen' drücken |	Das neuen Produkt wird angezeigt
2.1 |	Programm gestartet | Auf den Button 'Produkt hinzufügen' drücken |	Das Eingabefeld für das Ablaufdatum ist ein Kalender, aus dem man ein existierendes Datum auswählen muss
3.1 |	Programm gestartet |	Produkte hinzufügen |	Produkte werden nach dem Ablaufdatum aufsteigend sortiert angezeigt
4.1 |	Programm gestartet, Produkt hinzugefügt |	Auf den Button 'Podukt bearbeiten' drücken |	Ausgefüllte Eingabefelder für den Produktnamen und Ablaufdatum und ein Button 'speichern' erscheinen
4.2 |	Programm gestartet, Produkt hinzugefügt, auf den Button 'Podukt bearbeiten' gedrückt | Produtname und Ablaufdatum ändern, auf den Button 'speichern' drücken |	Die neuen Angaben des Produkts werden angezeigt
5.1 |	Programm gestartet, Produkt hinzugefügt |	Auf den Button 'Podukt löschen' drücken |	Das Produkt ist nicht mehr zu sehen
6.1 | Das Programm ist benutzerfreundlich | - | -
7.1 | Das Programm wird von Elena Tafelski geschrieben | - | -
