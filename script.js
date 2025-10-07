console.log('JS je připojený');


let mojePromenna = 5; // číslo

let mujRetezec = "Ahoj světe!"; // řetězec - vždy v uvozovkách!

// Můžete se setkat i se zápisem
var dalsiPromenna = [1, 2, 3]; // pole



let cislo = 6;
let text = "Ahoj lidi";

let cisloJedna = 5;
let cisloDve = 10;

// Výpočet se nikam neuložil
cisloJedna + cisloDve;

// nyní ano
let noveCislo = cisloJedna * cisloDve;


let ahoj = "Ahoj";
let svete = "světe!";

// dokonce můžeme přidávat i věci, které nemáme v proměnných
// pokud jsou stejného datového typu
let zprava = ahoj + " " + svete;



let promenna = "nastavená hodnota";
promenna = "nová hodnota";

const konstanta = "Hodnota, kterou nemůžu změnit";



function pozdrav(){
    console.log('Ahoj lidi');
}

pozdrav();

function secti(a, b){
    return a + b;
}


let vysledek = secti(22, 64);

console.log(secti(2, 6));

secti(2342, secti(1,3));