const numbers = [32, 20, 5, 12, 0, 45]
const str = 'Hello, World'



// 문제 1 ) 홀수만 출력하기
// numbers 변수에서 홀수만 출력하세요 for, if 문 중첩사용
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}


// 문제 2 ) 길이 출력하기
// str 변수의 길이를 출력하세요
console.log(`변수의 길이는 ${str.length} 입니다.`)



// 문제 3 ) 총합 구하기
// numbers의 변수안의 모든 값을 더한 총합을 출력하세요
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(`총합은 ${sum} 입니다.`)


// 문제 4 ) 20 이상의 수의 개수를 출력하시오.
// numbers 변수안의 값중에 20이상의 숫자의 개수를 출력하시오.
let count = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] >= 20){
        count++;
    }
}

console.log(`20이상의 숫자의 개수는 ${count} 입니다.`)