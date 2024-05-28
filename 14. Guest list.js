"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = void 0;
var Guest = ['Akram', 'Jalal', 'Faraz'];
exports.Guest = Guest;
var message = "I would like to invite you a dinner";
for (var i = 0; i < Guest.length; i++) {
    console.log(message + " " + Guest[i]);
}
