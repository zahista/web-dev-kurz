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



function pozdrav() {
    console.log('Ahoj lidi');
}

//pozdrav();

function secti(a, b) {
    return a + b;
}


let vysledek = secti(22, 64);

//console.log(secti(2, 6));

secti(2342, secti(1, 3));


function eurToCZK(value) {
    return value * 24;
}

function CZKToEur(value) {
    return value / 24;
}

//console.log(eurToCZK(200));
//console.log(CZKToEur(200));


const veta = "Programování je zábava!";
console.log(veta.length);


const ovoce = [
    "jablko",
    "banán",
    "pomeranč"
];


ovoce.push("hruška");

console.log(ovoce);

let noveOvoce = ovoce.unshift("borůvky");

console.log(ovoce);


console.log(ovoce.length);


console.log(ovoce[0]);



let person = {
    name: "Tomáš",
    surname: "Zaharowski",
    fullname() {
       return this.name + this.surname
    }, 

    pozdrav()
    {
        return "Ahoj světe";
    },
    age: 31,
    isMarried: true,
    height: 170,
    hobbies: ["ice hockey", "programming", "fishing"],
    kids: [
        {
            name: "Jáchym",
            surname: "Zaharowski",
            age: 3,
            isMarried: false,
            height: 90,
            hobbies: ["drawing", "screaming", "running"],
        },
        {
            name: "Meda",
            surname: "Zaharowski",
            age: 0.5,
            isMarried: false,
            height: 60,
            hobbies: ["eating", "sleeping"],
        },
    ]
};


let hobby = person.hobbies[1];

person.kids[0].name

person.hobbies = ["fotball", "sleeping"];


console.log(person);

console.log(person.fullname());

person.pozdrav();



let hero = document.getElementById('hero');
let cards = document.getElementById('cards');


cards.style.display = "block";

//-------------------------------------------------------------

const otevrit = document.getElementById('otevrit');
const zavrit = document.getElementById('zavrit');
const dialog = document.getElementById('dialog');

// přidáme posluchače na kliknutí - v callbacku otevřeme dialog
otevrit.addEventListener('click', () => {
    dialog.showModal();
});

// zde v callbacku zavřeme dialog
zavrit.addEventListener('click', () => {
    dialog.close();
});


document.addEventListener('mousemove', () => {
    console.log('Pohyb myší');
});


document.addEventListener('keydown', (event) => {
    console.log(event);
});

const input = document.getElementById('jmeno');

console.log(input);

input.addEventListener('keyup', (event) => {

    let value = event.target.value;
    console.log(value.length);

    if (value.length < 5) {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "2px solid green";
    }
    
})


    if(true){
        // spustí se tento kod
    }else{
        // v jiném případě se spustí tento kod 
    }

    if(true || false || true){
        // spustí se tento kod
    }else{
        // v jiném případě se spustí tento kod 
    }


    let fruit = ['jablko', 'hruška'];

    if(fruit[0] == "jablíčko")
    {
        console.log('V poli je banán');
    }



    let phones = ['android', 'iphone', 'samsung'];


    phones.forEach((phone) => {
        console.log(phone);
    });
    

//-------------------------------------------------------------




















