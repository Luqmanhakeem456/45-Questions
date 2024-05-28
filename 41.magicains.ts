
/* 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array. */

 let magiciansNames = ["Luqman", "Ishaq", "John", "Iftikhar",]
 
 function show_magicians(magicians: string[]){

  magicians.forEach(name => 
    console.log(name));
 }


 
 show_magicians(magiciansNames);
    