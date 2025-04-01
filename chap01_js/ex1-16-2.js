/*
if문을 사용하여 학점을 출력하세요.
*/

const score = 70;
// score가 90 이상 100 이하이면 "A" 출력
if (score >= 90 && score <= 100) {
  console.log("A");
}
// score가 80 이상 90 미만이면 "B" 출력
if (score >= 80 && score < 90) {
  console.log("B");
}
// score가 70 이상 80 미만이면 "C" 출력
if (score >= 70 && score < 80) {
  console.log("C");
}
// score가 60 이상 70 미만이면 "D" 출력
if (score >= 60 && score < 70) {
  console.log("D");
}
// score가 60 미만이면 "F" 출력

if (score < 60) {
  console.log("F");
}

//내 코드
const score1 = 90;
// score가 90 이상 100 이하이면 "A" 출력
if(score1 >= 90 || 100 <= score1){
  console.log('A');
}

// score가 80 이상 90 미만이면 "B" 출력
if(score1 >= 80 && 90 > score1 ){
  console.log('B');
}

// score가 70 이상 80 미만이면 "C" 출력
if(score1 >= 70 && 80 > score1){
  console.log('C');
}

// score가 60 이상 70 미만이면 "D" 출력
if(score1 >= 60 && 70 > score1){
  console.log('D');
}

// score가 60 미만이면 "F" 출력
if(score1 < 60){
  console.log('F');
}