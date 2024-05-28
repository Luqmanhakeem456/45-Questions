"use strict";
let Guest = ['Akram', 'Jalal', 'Faraz', 'Dawood'];
let message = "I would like to invite you a dinner";
for (var i = 0; i < Guest.length; i++) {
    console.log("Respected Sir/madam", +message + " " + Guest[i]);
}
;
let absent = "Jalal";
let new_guest = "Latif";
Guest[1] = new_guest;
for (var i = 0; i < Guest.length; i++) {
    console.log(message + " " + Guest[i]);
}
;
console.log(`Mr ${absent} will not join tommorow dinner party`);
