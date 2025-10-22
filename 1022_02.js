const math = 80;
let result = null;

// math 점수가 65점 이상이면 합격, 아니면 탈락
result = math >= 65 ? "Pass" : "Fail";

console.log(`Math : ${result}`); 

const eng = 45;

if(eng >= 65){
    result = "Pass";
} else {
    result = "Fail";
}

console.log(`English : ${result}`);


const average = (math + eng) /2;
// 평균점수가 90점 이상이면 'A', 80점 이상이면 'B', 70점 이상이면 'C', 그 미만일경우 'F'

if( average >= 90) { // if문 - 순서대로 
    result = 'A'
} else if(average >= 80) {
    result = 'B'
} else if(average >= 70) {
    result = 'C'
} else { // 마지막 조건에서만 else
    result = 'F'
}

console.log(`최종학점 : ${result}`);