/* 
for 반복문 - 문제만들기
for 반복문을 활용한 예제를 5개 만들고 실습하세요

for..of - 문제만들기 
for..of 구문을 활용한 예제를 5개 만들고 실습하세요

배열/for..of/for반복문 이해하고 정리하기
Javascript의 Array 데이터 타입 for..of 구문 for 반복문에 대하여
찾아보고 정리하세요
*/

for (let i = 1; i <= 7; i++){ // 예제 1-1. 1부터 7까지 숫자 출력
    console.log(i);
}


for (let i = 1; i <= 10; i++){ // 예제 1-2. 1~10 중 짝수만 출력
    if (i % 2 ===0){
        console.log(i);
    }
}

const numbers = [3, 6, 9, 12]; // 예제 1-3. 배열의 합 구하기
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(`배열의 합 : ${sum}`);


const word = 'Hello'; // 예제 1-4. 문자열 뒤집기
let reversed = '';

for (let i = word.length -1; i >=0; i--) {
    reversed += word[i];
}
console.log(reversed);


for (let i = 1; i <= 9; i++){ // 예제 1-5. 구구단 5단 출력
    console.log(`5 * ${i} = ${5 * i}`);
}

const fruity = [ 'apple', 'banana', 'grape', 'orange'] // 예제 2-1. 구구단 5단 출력

for (const fruit of fruity) {
    console.log(fruit);
}

const words = "Hello"; // 예제 2-2. 문자열의 각 문자 출력

for (const letter of words) {
  console.log(letter);
}


const foods = ['hambuger', 'pizza', 'rice'] // 예제 2-3. 배열 요소 길이 출력


for (const food of foods) {
    console.log(`${food} : 글자 수 : ${food.length}`);
}


const nums = [1, 2, 3, 4, 5]; // 예제 2-4. 숫자 배열의 합 구하기

let total = 0;

for (const n of nums) {
    total += n;
}

console.log(`총합 : ${total}`);


const colors = ['green', 'pink', 'yello']; // 예제 2-5. 순번으로 배열 요소 출력
let count = 1;

for (const color of colors) {
    console.log(`${count}. ${color}`);
    count++;
}


for (let i = 0; i < 6; i++){ // for 반복문
    console.log(i);
}

const names = ['daeun', 'minji', 'jisoo', 'gaeun']; // for..of 반복문

for (const name of names){
    console.log(name);
}
