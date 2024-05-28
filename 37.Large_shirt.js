"use strict";
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
// with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    console.log(`Ali make ${size} size t-shirt to all ${message}`);
}
make_shirt("Large", "Cricket team members");
make_shirt("medium", "football team members");
make_shirt("small", "Hochey team members");
