// 35.	Animals: Think of at least three different animals 
// that have a common characteristic. Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal. • 
//  Modify your program to print a statement about each animal, such as 
//  A dog would make a great pet. • Add a line at the end of 
//  your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ['cat', 'dog', 'lion',];
// for loop

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} is a great pet. \n ${animals[i]} use for hunter purposes.\n ${animals[i]} is loyal animal of owner. \n `);
}
