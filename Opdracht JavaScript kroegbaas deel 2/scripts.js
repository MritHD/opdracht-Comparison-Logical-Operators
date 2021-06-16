//Deel 1: leeftijdscontrole

const Age = 23; // Ik heb het gecheckt met typeof age. Daar kwam uit: number.

if (Age >= 18) {
  console.log('Kom binnen!');
} else {
  console.log('Helaas, je mag niet naar binnen. Je bent te jong.');
}

//Ik heb  verschillende leeftijden getest en de code werkt.

// Deel 2: ladiesnight

var isFemale = true;

if (isFemale) {
  console.log('Jij mag naar binnen!');

} else {
  console.log('Sorry, geen kerels vanavond')
}

var isFemale = false;

if (isFemale) {
  console.log('Jij mag naar binnen!');

} else {
  console.log('Sorry, geen kerels vanavond');
}

// Deel 3: veilig thuiskomen

const driverStatus = 'Bob';

if (driverStatus === 'Bob') {
  console.log('Start de motor maar');

} else {
  console.log('Inleveren die autosleutel');
}

// Opdracht Comparison && Logical Operators

//Deel 1

const myAge = 16;

if (myAge >= 18 && myAge < 25) {

  console.log('Yes! Je krijgt 50% korting op drankjes');

} else if (myAge < 18) {
  console.log('Helaas, jij bent te jong');

} else {
  console.log('Helaas, voor  jouw leeftijd hebben we volgende week een actie!');
}

// Deel 2

const myName = ""

if (myName = "Sarah" || myName = "Bram") {

  console.log("Je hebt geluk Sara of Bram, je krijgt een gratis biertje!");

}

//Deel 3

const totalAmount = 1000;

if (totalAmount > 25 || < 50) {

  console.log("Je krijgt een gratis portie vegaballetjes!");

} else if (totalAmount > 50 || < 100) {

  console.log("Je krijgt een gratis portie nachos!")

  else {
    console.log("Je verdient een fles champagne!")
  }

}