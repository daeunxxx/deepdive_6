// 함수선언식, 함수표현식

// 1. sum() 함수(두 수의 합을 반환)을 함수 선언식으로 만드시오
// 2. div() 함수(두 수의 나눈 값의 몫을 반환)을 함수 표현식으로 만드시오 (function 사용)
// 3. remainer() 함수(두 수의 나눈 값의 나머지값을 반환)을 함수 표현식으로 만드시오 (arrow function 사용)

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); 


function div(a, b) {
    return a / b;
}

console.log(div(100, 5));



const remainer = (a, b) => a % b;

console.log(remainer(10, 3)); 
