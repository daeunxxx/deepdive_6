// 논리연산자 활용 예제 5문제 만들기
// - 1 논리연산자(&&, ||, !) 3가지를 활용한 다양한 Javascript 문제 5개를 만들고,
// 풀이를 같이 적어주세요.

// 논리연산자 활용 예제 5문제 만들기
// - 2 논리연산자(&&, ||, !) 3가지를 활용한 다양한 Javascript 문제 5개를 만들고,
// 풀이를 같이 적어주세요.

// AND 연산자 (&&)
// 두 조건이 모두 true여야 결과가 true가 됨
// 1. 나이가 20세 이상이고, 학생이면 "청춘 할인 가능"
const age = 18;
const isstudent = true;
if (age >= 20 && isstudent){
    console.log('청춘 할인 가능');
} else{
    console.log('청춘 할인 불가능');
}

// 2. 점수가 80 이상이고 출석률이 90% 이상이면 합격
const score = 85;
const attendance = 92;
console.log("합격여부", score >= 80 && attendance >= 90);

// 3. 비가 오고, 우산이 없으면 "비 맞음"
const isRaining = true;
const hasUmbrella = false;
if (isRaining && !hasUmbrella){
console.log("비를 맞습니다")};


// OR 연산자 (||)
// 둘 중 하나라도 true면 true
// 4. 나이가 65세 이상이거나, 어린이(12세 미만)이면 무료 입장
const age1 = 10;
const isFree = age1 >= 65 || age1 < 12;
console.log("무료 입장 가능:", isFree);

// 5. 회원이거나, 쿠폰이 있으면 할인 가능
const isMember = false;
const hasCoupon = true;
if (isMember || hasCoupon){
    console.log("할인가능")
}

// NOT 연산자 (!)
// true → false, false → true로 바꿔줌
// 6. 로그인하지 않았으면 로그인 안내
const isLogin = false;
if (!isLogin) {
    console.log("로그인 해주세요");
}

// 7. 온라인 상태가 아니라면 "현재 오프라인"
const isOnline = false;
console.log("상태:", !isOnline ? "현재 오프라인" : "온라인");

// 복합 논리연산 (&&, ||, ! 섞어서)
// 8. 나이가 18세 이상이면서 (한국 거주자이거나 외국인 등록증이 있는 경우)
const age2 = 20;
const isKorean = false;
const hasIdCard = true;

if (age2 >= 18 && (isKorean || hasIdCard)){
    console.log("회원가입 가능")
}else{
    console.log("회원가입 불가능")
}

// 9. 휴가 중이거나 주말이면 "휴식 가능"
const isVacation = false;
const isWeekend = true;
console.log("휴식 가능:", isVacation || isWeekend);

// 10. 문이 잠겨있지 않고, 보안모드가 꺼져 있으면 문 열림
const isLocked = false;
const isSecurityOn = false;
if(!isLocked && !isSecurityOn){
    console.log("문이 열렸습니다");
}else{
    console.log("문이 잠겨있습니다");
}