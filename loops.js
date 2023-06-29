// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================
for (let i = 0; i < 5; i++) {
    console.log("*".repeat(i + 1));
}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
for(let i = 0; i < 5; i++) {
    if (i < 4) {
        console.log("loop...");
    } else {
        console.log("klaar!");
    }
}

// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
for (let i = 0; 1 < 10; i++) {
    if (i < 3) {
        console.log(i);
    }
    if (i > 2 && i < 6) {
        console.log(">" + i);
    }
    if (i > 5 && i < 10) {
        console.log(">>" + i);
    }
}

// voor bonus opdracht zie bonus.js
// deze code werkte niet toen ik hem hieronder had geplaatst, maar wel in een nieuwe .js