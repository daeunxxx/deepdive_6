// 삼항연산자
// __1__? __2__: _3___
// 조건식 ? 참일때 실행문 : 거짓일때 실행문

const a = 5;
const result1 = a % 2 === 0 ? "짝수" : "홀수";
console.log(result1);

const b = 10;
const result2 = b > 10 ? "b는 10보다 크다." : "b는 10보다 작다.";
console.log(result2);

// b가 10보다 큰지, 작은지를 판별하는 식을 입력하세요.
// b는 10보다 크다, b는 10보다 작다.

// 내가 입력한 수가 10보다 큰지를 매번 판별

function overTen(number) {
    const isOver =
    number > 10 ? `${number} : 10보다 크다` : `${number} : 10보다 작다`;
    console.log(isOver);
}

overTen(13);
overTen(3);
overTen(5);
overTen(-1);

// Mission 01 . 사각형의 크기를 구하는 함수(가로, 세로) -> 사각형의 너비는 ___입니다.
// 함수명 : getRectArea
// 결과 : 사각형의 크기는 ___입니다.

function getRectArea(width, height) {
    const result = width * height;
    console.log(`사각형의 크기는 ${result}입니다.`);
}

getRectArea(10, 5);
getRectArea(3, 7);

// Mission 02 . 입력받은 유저의 나이가 성인인지 미성년인지 판별하시오
// 함수명 : isAdult
// 결과 : 'hongildong'님은 '미성년자'입니다 / '성인'입니다.

function isAdult(name, age) {
    const result = age >= 18 ? '성인' : '미성년자'
    console.log(`${name}님은 ${result}입니다.`);
}

isAdult("hongildong", 20);
isAdult("hongildong", 12);

// Mission 03 . 학생의 성적표를 받아서, 평균을 구하시오 (국어, 영어, 수학)
// 함수명 : getAverage
// 결과 : 당신의 평균점수는 ___입니다. (a+b+c)/3

function getAverage(a,b,c){
    const average = (a+b+c)/3;
    console.log(`당신의 평균점수는 ${average}점 입니다.`);
}

getAverage(100, 100, 100);
getAverage(100, 100, 0);
getAverage(85, 65, 100);