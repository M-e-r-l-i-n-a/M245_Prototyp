# M245_Prototyp

## Inhaltsverzeichnis
1. [Problembeschreibung](#problembeschreibung)
2. [Anforderungen](#anforderungen)
3. [Art und Vorgehensweise](#art-und-vorgehensweise)
4. [Resultat](#resultat)
5. [Testkonzept](#testkonzept)
6. [Fazit und Reflexion](#fazit-und-reflexion)

## Problembeschreibung
Viele Menschen haben keinen Überblick darüber, bis wann welche Lebensmittel bei ihnen zu Hause haltbar sind. Dies führt zu unnötiger Lebensmittelverschwendung, welche ich mit meinem Programm zu verhindern versuche.

## Anforderungen
Nr. |	Typ |	Beschreibung
--- | --- | ---
1	|	Funktional | Produkte können mit Produktnamen und Ablaufdatum eingetragen werden
2	|	Funktional | Es können nur existierende Daten eingetragen werden
3 | Funktional | Die Produkte können in Kategorien eingeteilt werden (Milchprodukte, Gemüse, Fleisch, ...)
4	|	Funktional | Die Produkte werden nach dem Ablaufdatum aufsteigend sortiert
5 | Funktional | Die Produkte werden farbig hinterlegt, je nach dem, wann sie ablaufen und zu welcher Kategorie sie gehören (grün: alles gut, gelb: möglichst bald konsumieren, orange: vor Konsum kontrollieren, rot: wegwerfen)
6	|	Funktional | Die Produktnamen und Ablaufdaten können bearbeitet werden
7	|	Funktional | Die Produkte können gelöscht werden
8	|	Qualität | Das Programm ist benutzerfreundlich
9	|	Randbedingungen	|	Das Programm wird von Elena Tafelski geschrieben

## Art und Vorgehensweise
Ich programmiere einen Funktionsprototyp und gehe dabei nach dem vertikalen Prototyping (Durchstich) vor.

## Resultat
Der Quellcode des Prototyps besteht aus HTML-, CSS- und JavaScript-Dateien und ist in diesem Repository abgelegt.
Der vollständig implementierte und lauffähige Prototyp ist unter der folgenden URL verfügbar:

https://food-save.netlify.app

## Testkonzept
### Testumfeld/Testumgebung
Mit Google Chrome Version 123.0.6312.106 auf meinem ThinkPad L13 Yoga Gen 2.

### Testfälle
Nummer | Voraussetzung |	Eingabe |	Erwartete Ausgabe
--- | --- | --- | ---
1.1 |	Programm gestartet | Auf dem Button 'Produkt hinzufügen' drücken | Eingabefelder für den Produktnamen, Ablaufdatum und Kategorie und ein Button 'hinzufügen' erscheinen
1.2 |	Programm gestartet, auf den Button 'Podukt hinzufügen' gedrückt | Felder ausfüllen, auf den Button 'hinzufügen' drücken |	Das neuen Produkt wird mit Produktname und Ablaufdatum angezeigt
2.1 |	Programm gestartet | Auf den Button 'Produkt hinzufügen' drücken | Das Eingabefeld für das Ablaufdatum ist ein Kalender, aus dem man ein existierendes Datum auswählen muss
3.1 | Programm gestartet, auf den Button 'Podukt hinzufügen' gedrückt | Eine der vorgegebenen Kategorien kann ausgewählt werden | -
3.2 | Programm gestartet, auf den Button 'Podukt hinzufügen' gedrückt | Felder ausfüllen, auf den Button 'hinzufügen' drücken |	Das neuen Produkt wird in der angegebenen Kategorie angezeigt
4.1 |	Programm gestartet | Produkte hinzufügen |	Produkte werden nach dem Ablaufdatum aufsteigend sortiert angezeigt
5.1 | Programm gestartet | Produkte hinzufügen |	Produkte werden in den Kategorien angezeigt und sind mit der entsprechenden Farbe hinterlegt
6.1 |	Programm gestartet, Produkt hinzugefügt |	Auf den Button 'Podukt bearbeiten' drücken | Ausgefüllte Eingabefelder für Produktnamen, Ablaufdatum und Kategorie und ein Button 'speichern' erscheinen
6.2 |	Programm gestartet, Produkt hinzugefügt, auf den Button 'Podukt bearbeiten' gedrückt | Produtname, Ablaufdatum und Kategorie ändern, auf den Button 'speichern' drücken |	Die neuen Angaben des Produkts werden angezeigt
7.1 |	Programm gestartet, Produkt hinzugefügt |	Auf den Button 'Podukt löschen' drücken |	Das Produkt ist nicht mehr zu sehen
8.1 | Das Programm ist benutzerfreundlich | - | -
9.1 | Das Programm wird von Elena Tafelski geschrieben | - | -

### Testprotokoll
Nummer | Datum | Resultat | Bemerkung | Durchgeführt
--- | --- | --- | --- | ---
1.1 | 07.04.2024 | OK | - | Elena Tafelski
1.2 | 07.04.2024 | OK | - | Elena Tafelski
2.1 | 07.04.2024 | OK | - | Elena Tafelski
3.1 | 07.04.2024 | OK | - | Elena Tafelski
3.2 | 07.04.2024 | OK | - | Elena Tafelski
4.1 | 07.04.2024 | OK | - | Elena Tafelski
5.1 | 07.04.2024 | OK | - | Elena Tafelski
6.1 | 07.04.2024 | OK | - | Elena Tafelski
6.2 | 07.04.2024 | OK | - | Elena Tafelski
7.1 | 07.04.2024 | OK | - | Elena Tafelski
8.1 | 07.04.2024 | OK | - | Elena Tafelski
9.1 | 07.04.2024 | OK | - | Elena Tafelski

### Testbericht
Alles funktioniert, der Prototyp kann potentiellen Investoren vorgestellt werden.

## Fazit und Reflexion
Ich habe es geschafft, den Prototyp fertig zu stellen. Er läuft einwandfrei und erfüllt seinen Zweck.

Das Programmieren des Prototyps war schwierig, da ich vieles nicht wusste, aber dafür habe ich auch viel gelernt. Ich habe gelernt, wie man Arrays sortiert und habe mich mit localStorage und sessionStorage beschäftigt. Ich hatte am meisten Probleme damit, das Bearbeiten der Produkte zu implementieren, da ich dafür die ID des Projekts von der einen JavaScript-Datei in die andere bringen musste. Das habe ich dann mit dem sessionStorage gelöst.

---
Elena Tafelski, 07.04.2024
