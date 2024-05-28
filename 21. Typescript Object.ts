interface items {
    name: string;
    price: number;
};
// Create two objects

const Book: items = 
    {
        name: 'Chemistry',
        price: 100,
    };
    const Book2: items ={
        name: 'Biology',
        price: 400,
    }
    console.log(`Book  name: ${Book.name}, \n price: $${Book.price} \n`)
    console.log(`Book2 name: ${Book2.name}, \n price: $${Book2.price} \n`)