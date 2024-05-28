"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['latif', 'Kamran', 'Ishaq', 'Jameel', 'admin'];
let new_users = ['saba', 'afsheen', 'Owais', 'admin', 'Yousuf'];
new_users.forEach((new_user) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} will need to enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
});
