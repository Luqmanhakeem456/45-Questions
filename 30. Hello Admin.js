"use strict";
// 30.	Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing code that will 
// print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
Object.defineProperty(exports, "__esModule", { value: true });
let users = ['admin', 'Mary', 'Peter', 'Luqman', 'John'];
for (let user of users) {
    if (user === 'admin') {
        console.log(`Special Greeting, Hello Admin!, \n would you like to see a status report?\n`);
    }
    else {
        console.log(`Hell ${user}, \n thank you for logging in again.\n`);
    }
}
;
