sayHi();
function sayHi() { // 함수 선언문 - 동작함
    console.log("Hi!");
}

const a = "hello";
const b = 3;

const c = a + b; // "hello3" (문자열)
const d = "5";

console.log(b + d); // "35" 문자열 + 넘버 -> (문자열)
console.log(b * d); // "15" 문자열 * 넘버 -> (숫자)
console.log(a * b); // "NaN" (Not a Number)

let e; 
console.log("e :", e); // undefined

const f = null; // 의도적 빈값
console.log("f :", f);

const fruits = [ 'banana', 'melon', 'watermelon']
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

const fruits2 = [ 'apple', 'banana', 'cherry' ];
for (let i = 0; i < fruits2.length; i++) {
        console.log(`${i + 1}. ${fruits2[i]}`);
    }

const fruits3 = [ 'kiwi', 'grape', 'pear' ];
for (const fruit of fruits3) {
    console.log(fruit);
}

const animals = [ 'tiger', 'dog', 'lion', 'cat', 'graff'];
console.log(animals[0]);

for (const animal of animals){
    console.log(animal);
}

for (let i = 1; i <= 5; i++){
    console.log(i);
}

for (const char of "Hello"){
    console.log(char);
}