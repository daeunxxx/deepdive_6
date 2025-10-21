const a = "hello";
const b = 3;
                 // c의 데이터 타입은 뭘까요? 
const c = a + b; // 문자열 + 넘버 ===> 문자열 자동형변환
const d = "5";

console.log(b + d); // 문자열 + 넘버 -> 문자열 
console.log(b * d); // 문자열 * 넘버 -> 넘버
console.log(a * b); // NaN -> Not a Number

let e; // const, let 변순 선언, 값을 지정하지 않았다.
console.log("e :", e); // undefined

const f = null; // 빈 값
console.log("f :", f);

const fruits = [ 'banana','melon','watermelon' ] // SyntaxError:오타에러 / [] : 배열 array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

