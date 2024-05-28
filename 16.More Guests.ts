let Guest: string[] = ['Akram', 'Jalal', 'Faraz', 'Dawood'];
// let message: string = "I would like to invite you a dinner" ;
// for(var i=0; i<Guest.length; i++){
//     console.log("Respected Sir/madam", + message + " " + Guest[i])
// };
let absent: string = "Jalal" ;
let new_guest: string = "Latif";
Guest[1] = new_guest;
for(let i=0; i<Guest.length; i++){
    console.log("\n Respencte Sir/Madam \n" + Guest[i] + "\n you invited in bigger table. \n Thank You." )
};
console.log(`Mr ${absent} ,\will not join tommorow dinner party`); 
Guest.unshift('Nadeem', 'Farhan', 'Mehmood');
for(let i=0; i<Guest.length; i++){
    console.log("\n Respencte Sir/Madam \n" + Guest[i] +  "\n you invited in bigger table. \n Thank You.")
};
