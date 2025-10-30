const fruits = [ 'apple', 'banana', 'cherry' ];

fruits.forEach((fruit, idx) => {
    console.log(`${idx + 1}. ${fruit}`);
});



const animals = ['dog', 'cat', 'rabbit'];

animals.forEach((animal, i) => {
    console.log(`${i + 1}. ${animal}`);
});



const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n * 2));


const texts = ["김", "다", "은"]
texts.forEach((text, idx) => {
    console.log(`${idx + 1}번째 : ${text}`);
});
