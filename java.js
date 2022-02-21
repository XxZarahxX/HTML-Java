"use strict";

// window.alert("Itt vagyunk...");

// let nev = window.prompt("Hogy hívnak?.. ", "Valaki");
// let env = window.confirm("Éhes vagy?..")
// console.log(nev);

// const valami = 3847192;
// console.log(valami);
// valami = 'alma';
// console.log(valami);
// var valami = 12;

// const windowsize = window.outerHeight;
// const windowsize = window.outerWidth;
// const windowsize = window.innerWidth;
// let windowsize = window.outerHeight;
// console.log(windowsize);


//  ||| KIÍRATÁS |||

// Python: for, while, if 
// foreach, while, do while, switch, if

let appleblock = ["alma", 72432, true, [1,2]];

// || 1. LEHETŐSÉG 
for (let i = 0; i < appleblock.length; i++) {
    console.log(appleblock[i]);
}

// || 2. LEHETŐSÉG 
appleblock.forEach((item, index) => {
    console.log(item);
});

// || 3. LEHETŐSÉG 
// k++ hozzáadja - ++k elrejti az első 2 értéket 
// let k = 0;
// while (k < appleblock.length); {
//     console.log(appleblock[k]);
// }

// || 4. LEHETŐSÉG 
let n = 0;
do {
    console.log(appleblock[n])
    n++;
} while (n < appleblock.length)


// TERNÁRIS OPERÁTOR
// let text = appleblock.length == 3 ? "A 3. eleme " : "Nem a 3. eleme " + appleblock.length;
// console.log(text);

// LOGIKAI OPERÁTOR AND/OR/&&
let appleblock = ["alma", 72432, true, [1,2]];

// let log = appleblock.length == 3 && appleblock[0] == 'alma';
// console.log(log);


//and operator
// let x = 12;
// let log = appleblock.length == 3 && x == 15;
// console.log(log);
// console.log(x);

let x = 12;
appleblock.length == 2 && (appleblock[0] == 15);
console.log(appleblock);

"use strict";

// VAGY OPERÁTOR: ||
let appleblock = ["alma", 72432, true, [1,2]];

let x = 12
let log = appleblock.length == 2 || (appleblock[0] = 15);
console.log(log);
console.log(appleblock);

appleblock.length == 3 && appleblock.forEach((log) => console.log(log));

// NEM OPERÁTOR: !
let log = !appleblock.length == 2;
console.log(log);

//          NULLISH OP:  ??
//      ##    ??NEM MŰKÖDŐ??    ##
let elso;
let masodik = null;
let haramadik = "NaN";
let negyedik = null;

//NaN -al visszatér -> NaN: not a number amely létező szám értéknek számít 
console.log(elso ?? masodik ?? haramadik ?? negyedik ?? "alma");
console.log(elso || masodik || haramadik || negyedik || "alma");

console.log(ertek);





