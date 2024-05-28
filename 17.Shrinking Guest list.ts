let Guest: string[] = ['Akram', 'Jalal', 'Faraz', 'Dawood'];
// let message: string = "I would like to invite you a dinner" ;
// for(var i=0; i<Guest.length; i++){
//     console.log("Respected Sir/madam", + message + " " + Guest[i])
// };
let absent: string = "Jalal" ;
let new_guest: string = "Latif";
Guest[1] = new_guest;
// for(let i=0; i<Guest.length; i++){
//     console.log("\n Respencte Sir/Madam \n" + Guest[i] + "\n you invited in bigger table. \n Thank You." )
// };
console.log(`Mr ${absent} ,\will not join tommorow dinner party`); 
Guest.unshift('Nadeem', 'Farhan', 'Mehmood');
// for(let i=0; i<Guest.length; i++){
//     console.log("\n Respencte Sir/Madam \n" + Guest[i] +  "\n you invited in bigger table. \n Thank You.")
// };
console.log(`\n Unfortunatly we can not arrange big table, Only two people allow.\n`);
while(Guest.length>2){
    let remove_guest = Guest.pop();
    console.log(`\n Sorry Sir/Madam.${remove_guest} your not invited for dinner.\n`);
};
for(let i=0; i<Guest.length; i++){
    console.log("\n Respencte Sir/Madam \n" + Guest[i] +  "\n Yes you are still invited on tommorow. \n Thank You.")
};
Guest.splice(0, 2);
console.log(Guest);




