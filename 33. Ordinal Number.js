"use strict";
// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array,
//  such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
Object.defineProperty(exports, "__esModule", { value: true });
let ordinalnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for loop
for (let i = 0; i < ordinalnumber.length; i++) {
    // now we use condition
    if (ordinalnumber[i] == 1) {
        console.log(`${ordinalnumber[i]}st`);
    }
    else if (ordinalnumber[i] == 2) {
        console.log(`${ordinalnumber[i]}nd`);
    }
    else if (ordinalnumber[i] == 3) {
        console.log(`${ordinalnumber[i]}rd`);
    }
    else if (ordinalnumber[i] == 4) {
        console.log(`${ordinalnumber[i]}th`);
    }
    else if (ordinalnumber[i] == 5) {
        console.log(`${ordinalnumber[i]}th`);
    }
    else if (ordinalnumber[i] == 6) {
        console.log(`${ordinalnumber[i]}th`);
    }
    else if (ordinalnumber[i] == 7) {
        console.log(`${ordinalnumber[i]}th`);
    }
    else if (ordinalnumber[i] == 8) {
        console.log(`${ordinalnumber[i]}th`);
    }
}
;
