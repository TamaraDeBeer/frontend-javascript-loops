// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================

for (let i = 1; i < 101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}