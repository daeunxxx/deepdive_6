// 배열
const animals = ["lion", "tiger", "puppy", "parret", "cat"];

for (let animal of animals) {
  console.log(animal);
}

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
console.clear();

animals.forEach((animal, idx) => {
  console.log(`${idx}. ${animal}`);
});



const numbers = [ 10, 20, 30, 40, 50 ];

// 1. forEach구문으로 40 이상의 숫자만 출력 -> 40, 50
// 2. forEach구문으로 40 이상의 인덱스번호만 출력 -> 3, 4


numbers.forEach((number, idx) => {
  if (number >= 40) {
  console.log(number, idx);
  }
});


const words = [ 'hamburger', 'milk', 'coffee', 'juice', 'chocolate' ]
// 3. words 에서 글자수가 6자 이상인 단어만 출력 -> lenth 사용, forEach

words.forEach((word) => {
  if (word.length >= 6) {
    console.log(word);
  }
});

