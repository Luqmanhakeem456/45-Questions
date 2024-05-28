let cars: string = 'saburu';

// Test 1: Equility comparisons (True)
console.log(`Is car == 'saburu'? I predict ture.`);
console.log(cars == 'saburu'); //Ture

// Test 2: strict equality comparisons (True)
console.log(`Is car === 'saburu'? I predict ture.`);
console.log(cars === 'saburu'); //Ture

// Test 3: Inequality comparisons (False)
console.log(`Is car != 'saburu'? I predict ture.`);
console.log(cars != 'saburu'); //False

// Test 4: strict inequality comparisons (False)
console.log(`Is car !== 'saburu'? I predict ture.`);
console.log(cars !== 'saburu'); //False

// Test 5: Less than comparisons (False)
console.log(`Is car < 'saburu'? I predict ture.`);
console.log(cars < 'saburu'); //False (lexicographic comparison)

// Test 6: Greater than comparisons (False)
console.log(`Is car > 'saburu'? I predict ture.`);
console.log(cars > 'saburu'); //False (lexicographic comparison)

// Test 7: Less than or equal to comparisons (True)
console.log(`Is car <= 'saburu'? I predict ture.`);
console.log(cars <= 'saburu'); //True 


// Test 8: Greater than or equal to comparisons (True)
console.log(`Is car >= 'saburu'? I predict ture.`);
console.log(cars >= 'saburu'); //True

// Test 9: Cheking Truthiness (True)
console.log(`Is car? I predict ture.`);
console.log(cars); //True (non empty string is truthy)

// Test 10: Cheking Falsiness (False)
console.log(`Is !car? I predict ture.`);
console.log(!cars); //False (negative truthy value)