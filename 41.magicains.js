"use strict";
/* 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
let magiciansNames = ["Luqman", "Ishaq", "John", "Iftikhar",];
show_magicians(magiciansNames);
