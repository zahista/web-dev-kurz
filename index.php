<?php

echo "Ahoj jsem tady a funguju";



//string


/*
sfspodfksdpofksdof
sdsdfsdfsdfsdfdsfdsffsdf
vdsdvsdvsdvsdvdsv
*/
$promenna = "Jsem string";

// čísla 
$float = 2.4;
$int = 4;


//boolean 
$pravd = false;
$lez = true;

// indexované pole 
$pole = ['jablíčko', 'hruška', 'borůvky'];


//asociativni pole 
$asociativniPole = [
    "prvni_ovoce" => "jablko",
    "druhe_ovoce" => 2,
    "treti_ovoce" => false,
    "treti_ovoce" => "třešně",
];

$novePoleKlicu = array_keys($asociativniPole);

//multidimenzionální pole 
$multiPole = [
    "name" => "Tomas",
    "kids" => [
        [
            "name" => "Jáchym"
        ],
        [
            "name" => "Meda"
        ]
    ],
];

// prázdno
$nic = NULL;

$pozdrav = "Ahoj jak se máš?";

//funkce
function pozdrav(string $name, string $surname): string
{
    return "Ahoj {$name} {$surname}";
}

function odesliMail(string|int $adress): void
{

}
?>

<pre>
    <?php echo var_dump($_SERVER) ?>
</pre>


<form action="/test.php" method="POST">
    <input type="text" name="name" id="name">
    <button type="submit">Odeslat na test.php</button>
</form>